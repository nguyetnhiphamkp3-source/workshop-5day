#!/usr/bin/env python3
import http.server, socketserver, re, os, json, time

PORT = 8765
EXT_MAP = {
    'svg': 'image/svg+xml',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'webp': 'image/webp',
    'gif': 'image/gif',
    'woff2': 'font/woff2',
    'woff': 'font/woff',
    'mp4': 'video/mp4',
    'mjs': 'text/javascript',
    'js': 'text/javascript',
    'css': 'text/css',
    'html': 'text/html',
    'json': 'application/json',
}

LIVERELOAD_SNIPPET = b"""<script>
(function(){
  var last = null;
  setInterval(function(){
    fetch('/__reload_ts').then(function(r){return r.text();}).then(function(t){
      if(last === null){ last = t; return; }
      if(t !== last){ location.reload(); }
    }).catch(function(){});
  }, 1000);
})();
</script></body>"""

def newest_mtime():
    latest = 0
    for root, dirs, files in os.walk('.'):
        # Skip font/3rd-party asset dirs (rarely change)
        if any(p in root for p in ('/assets/framer/assets', '/assets/framer/third-party-assets')):
            continue
        for fn in files:
            if not fn.endswith(('.html', '.mjs', '.js', '.css', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif')):
                # Also catch Framer-style suffixed files (e.g. *.png_Q_...)
                if '.png_Q_' not in fn and '.jpg_Q_' not in fn and '.svg_Q_' not in fn and '.jpeg_Q_' not in fn:
                    continue
            try:
                m = os.path.getmtime(os.path.join(root, fn))
                if m > latest: latest = m
            except OSError: pass
    return latest

class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Framer hydration .mjs references images at paths whose on-disk file
        # carries a .webp extension we have to add — either appended (for the
        # ".png_Q_..._E_1204" Framer scaler URLs) or substituted (for plain
        # ".png"/".jpg" assets that were re-encoded to webp).
        fs = super().translate_path(path)
        if os.path.isfile(fs):
            return fs
        if os.path.isfile(fs + '.webp'):
            return fs + '.webp'
        for ext in ('.png', '.jpg', '.jpeg'):
            if fs.lower().endswith(ext):
                alt = fs[: -len(ext)] + '.webp'
                if os.path.isfile(alt):
                    return alt
        return fs

    def guess_type(self, path):
        base = os.path.basename(path)
        m = re.search(r'\.([A-Za-z0-9]+)(?:_Q_|$)', base)
        if m:
            ext = m.group(1).lower()
            if ext in EXT_MAP:
                return EXT_MAP[ext]
        return super().guess_type(path)

    def end_headers(self):
        # Dev mode: no caching at all — always fetch fresh assets
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        # Auto-reload timestamp endpoint
        if self.path.startswith('/__reload_ts'):
            ts = f"{newest_mtime():.3f}".encode()
            self.send_response(200)
            self.send_header('Content-Type', 'text/plain')
            self.send_header('Content-Length', str(len(ts)))
            self.end_headers()
            self.wfile.write(ts)
            return
        # Inject livereload snippet into HTML responses
        clean_path = self.path.split('?', 1)[0]
        if clean_path.endswith('.html') or clean_path in ('/', ''):
            fs_path = clean_path.lstrip('/') or 'index.html'
            if os.path.isdir(fs_path):
                fs_path = os.path.join(fs_path, 'index.html')
            if os.path.isfile(fs_path):
                try:
                    with open(fs_path, 'rb') as f:
                        body = f.read()
                    if b'</body>' in body:
                        body = body.replace(b'</body>', LIVERELOAD_SNIPPET, 1)
                    self.send_response(200)
                    self.send_header('Content-Type', 'text/html; charset=utf-8')
                    self.send_header('Content-Length', str(len(body)))
                    self.end_headers()
                    self.wfile.write(body)
                    return
                except OSError:
                    pass
        super().do_GET()

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT} (auto-reload enabled)")
    httpd.serve_forever()
