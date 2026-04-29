import{t as e}from"./rolldown-runtime.T_CFW6Lp.mjs";import{F as t,L as n,N as r,O as i,c as a,j as o,l as s,o as c,w as l,z as u}from"./react.D6e4EpvH.mjs";import{F as d,h as f,t as p}from"./motion.BY7NHm82.mjs";import{A as m,C as h,Y as g,mt as _,o as v}from"./framer.DHqk2HyC.mjs";function y(...e){let n=h.current()===h.canvas,i=u===void 0,a=S(),[s,c]=t(()=>b(e.map(C)));r(()=>{if(!n)return;let t=document.body.querySelector(`main > div`);if(!t)return;let r=new MutationObserver(()=>{c(b(e.map(C)))});return r.observe(t,{attributes:!0,attributeFilter:[`style`]}),()=>r.disconnect()},e);let l=o(()=>e.map(C),[e]);if(i)return e.map(e=>T(e));let d=[];for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!=`string`){d.push(n);continue}let r=l[t],i=s[r];r&&i?d.push(a?i.dark||i.light||n:i.light||n):d.push(n)}return d}function b(e){let t=h.current()===h.canvas,n={},r={},i={};if(t&&typeof document<`u`){let e=document.body.querySelector(`main > div`);if(e){let t=e.getAttribute(`style`);if(t){let e=w(t);r=e,i=e}}}else{let{light:e,dark:t}=x();r=w(e),i=w(t)}return new Set([...Object.keys(r),...Object.keys(i)]).forEach(e=>{n[e]={light:r[e]||``,dark:i[e]||``}}),n}function x(){let e=``,t=``;if(typeof document<`u`){let n=document.head.querySelectorAll(`style[data-framer-css], style[data-framer-css-ssr], style[data-framer-css-ssr-minified]`);for(let r of n){let n=r.sheet?.cssRules;if(!n)continue;let i=[];for(let e of n)if(e instanceof CSSStyleRule)i.push([e,!1]);else if(e instanceof CSSMediaRule&&e.conditionText===`(prefers-color-scheme: dark)`)for(let t of e.cssRules)t instanceof CSSStyleRule&&i.push([t,!0]);for(let[n,r]of i){let i=n.cssText;if(!i.includes(`--token-`))continue;let a=r?n.selectorText===`body`:n.selectorText===`body[data-framer-theme="dark"]`,o=!r&&n.selectorText===`body`;if(!(!a&&!o)&&(a?t||=i.substring(i.indexOf(`{`)+1,i.lastIndexOf(`}`)).trim():e||=i.substring(i.indexOf(`{`)+1,i.lastIndexOf(`}`)).trim(),t&&e))break}if(t&&e)break}}return{light:e,dark:t}}function S(){let e=u!==void 0&&u.location.origin.endsWith(`framercanvas.com`),[n,i]=t(()=>u===void 0?!1:e&&typeof document<`u`?document.body.getAttribute(`data-framer-theme`)===`dark`:u.matchMedia(`(prefers-color-scheme: dark)`).matches);return r(()=>{if(e){let e=new MutationObserver(e=>{e.forEach(e=>{e.attributeName===`data-framer-theme`&&i(document.body.getAttribute(`data-framer-theme`)===`dark`)})});return e.observe(document.body,{attributes:!0,attributeFilter:[`data-framer-theme`]}),()=>e.disconnect()}else{let e=u.matchMedia(`(prefers-color-scheme: dark)`),t=e=>{i(e.matches)};return e.matches!==n&&i(e.matches),e.addListener(t),()=>e.removeListener(t)}},[e]),n}function C(e){if(!e||!e.startsWith(`var(`))return``;let t=E.exec(e);return t&&t[1]||``}function w(e){let t={};return e&&e.split(`;`).filter(Boolean).forEach(e=>{let[n,r]=e.split(`:`).map(e=>e.trim());n&&r&&(t[n]=r)}),t}function T(e){if(!e||!e.startsWith(`var(`))return e;let t=e.slice(4,-1).split(`,`);return t.length>1?t.slice(1).join(`,`).trim():``}var E,D=e((()=>{n(),g(),l(),E=/var\s*\(\s*(--[\w-]+)(?:\s*,\s*((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*))?\s*\)/}));function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error(`An error occurred compiling the shaders: `+e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function A(e,t,n){let r=k(e,e.VERTEX_SHADER,t),i=k(e,e.FRAGMENT_SHADER,n);if(!r||!i)return null;let a=e.createProgram();return a?(e.attachShader(a,r),e.attachShader(a,i),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS)?(e.detachShader(a,r),e.detachShader(a,i),e.deleteShader(r),e.deleteShader(i),a):(console.error(`Unable to initialize the shader program: `+e.getProgramInfoLog(a)),e.deleteProgram(a),e.deleteShader(r),e.deleteShader(i),null)):null}var j,M,N=e((()=>{n(),j=class{constructor(e,t,n={},r,i=1,a=0){O(this,`canvas`,void 0),O(this,`gl`,void 0),O(this,`program`,null),O(this,`uniformLocations`,{}),O(this,`fragmentShader`,void 0),O(this,`rafId`,null),O(this,`lastFrameTime`,0),O(this,`totalAnimationTime`,0),O(this,`speed`,1),O(this,`providedUniforms`,void 0),O(this,`hasBeenDisposed`,!1),O(this,`resolutionChanged`,!0),O(this,`initWebGL`,()=>{let e=A(this.gl,M,this.fragmentShader);e&&(this.program=e,this.setupPositionAttribute(),this.setupUniforms())}),O(this,`setupPositionAttribute`,()=>{let e=this.gl.getAttribLocation(this.program,`a_position`),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)}),O(this,`setupUniforms`,()=>{this.uniformLocations={u_time:this.gl.getUniformLocation(this.program,`u_time`),u_pixelRatio:this.gl.getUniformLocation(this.program,`u_pixelRatio`),u_resolution:this.gl.getUniformLocation(this.program,`u_resolution`),...Object.fromEntries(Object.keys(this.providedUniforms).map(e=>[e,this.gl.getUniformLocation(this.program,e)]))}}),O(this,`resizeObserver`,null),O(this,`setupResizeObserver`,()=>{this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.canvas),this.handleResize()}),O(this,`handleResize`,()=>{let e=u.devicePixelRatio,t=this.canvas.clientWidth*e,n=this.canvas.clientHeight*e;(this.canvas.width!==t||this.canvas.height!==n)&&(this.canvas.width=t,this.canvas.height=n,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))}),O(this,`render`,e=>{if(this.hasBeenDisposed)return;let t=e-this.lastFrameTime;this.lastFrameTime=e,this.speed!==0&&(this.totalAnimationTime+=t*this.speed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.totalAnimationTime*.001),this.resolutionChanged&&=(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,u.devicePixelRatio),!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.speed===0?this.rafId=null:this.requestRender()}),O(this,`requestRender`,()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)}),O(this,`updateProvidedUniforms`,()=>{this.gl.useProgram(this.program),Object.entries(this.providedUniforms).forEach(([e,t])=>{let n=this.uniformLocations[e];if(n)if(Array.isArray(t))switch(t.length){case 2:this.gl.uniform2fv(n,t);break;case 3:this.gl.uniform3fv(n,t);break;case 4:this.gl.uniform4fv(n,t);break;default:t.length===9?this.gl.uniformMatrix3fv(n,!1,t):t.length===16?this.gl.uniformMatrix4fv(n,!1,t):console.warn(`Unsupported uniform array length: ${t.length}`)}else typeof t==`number`?this.gl.uniform1f(n,t):typeof t==`boolean`?this.gl.uniform1i(n,t?1:0):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})}),O(this,`setSeed`,e=>{this.totalAnimationTime=1e3/120*e,this.lastFrameTime=performance.now(),this.render(performance.now())}),O(this,`setSpeed`,(e=1)=>{this.speed=e,this.rafId===null&&e!==0&&(this.lastFrameTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&e===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)}),O(this,`setUniforms`,e=>{this.providedUniforms={...this.providedUniforms,...e},this.updateProvidedUniforms(),this.render(performance.now())}),O(this,`dispose`,()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&=(this.resizeObserver.disconnect(),null),this.uniformLocations={}}),this.canvas=e,this.fragmentShader=t,this.providedUniforms=n,this.totalAnimationTime=a;let o=e.getContext(`webgl2`,r);if(!o)throw Error(`WebGL not supported`);this.gl=o,this.initWebGL(),this.setupResizeObserver(),this.setSpeed(i),this.canvas.setAttribute(`data-paper-shaders`,`true`)}},M=`#version 300 es
layout(location = 0) in vec4 a_position;

void main() {
  gl_Position = a_position;
}
`})),P,F,I=e((()=>{P={Checks:0,Stripes:1,Edge:2},F=`#version 300 es
precision highp float;

uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;

uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1;
uniform vec4 u_color2;
uniform vec4 u_color3;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;


out vec4 fragColor;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  // Smoothstep for interpolation
  vec2 u = f * f * (3.0 - 2.0 * f);

  // Do the interpolation as two nested mix operations
  // If you try to do this in one big operation, there's enough precision loss to be off by 1px at cell boundaries
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);

}

vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
    vec3 color1 = c1.rgb * c1.a;
    vec3 color2 = c2.rgb * c2.a;
    vec3 color3 = c3.rgb * c3.a;

    float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);
    float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);

    vec3 blended_color_2 = mix(color1, color2, r1);
    float blended_opacity_2 = mix(c1.a, c2.a, r1);

    vec3 c = mix(blended_color_2, color3, r2);
    float o = mix(blended_opacity_2, c3.a, r2);
    return vec4(c, o);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 uv_original = uv;

    float t = .5 * u_time;

    float noise_scale = .0005 + .006 * u_scale;

    uv -= .5;
    uv *= (noise_scale * u_resolution);
    uv = rotate(uv, u_rotation * .5 * PI);
    uv /= u_pixelRatio;
    uv += .5;

    float n1 = noise(uv * 1. + t);
    float n2 = noise(uv * 2. - t);
    float angle = n1 * TWO_PI;
    uv.x += 4. * u_distortion * n2 * cos(angle);
    uv.y += 4. * u_distortion * n2 * sin(angle);

    float iterations_number = ceil(clamp(u_swirlIterations, 1., 30.));
    for (float i = 1.; i <= iterations_number; i++) {
        uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);
        uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);
    }

    float proportion = clamp(u_proportion, 0., 1.);

    float shape = 0.;
    float mixer = 0.;
    if (u_shape < .5) {
      vec2 checks_shape_uv = uv * (.5 + 3.5 * u_shapeScale);
      shape = .5 + .5 * sin(checks_shape_uv.x) * cos(checks_shape_uv.y);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else if (u_shape < 1.5) {
      vec2 stripes_shape_uv = uv * (.25 + 3. * u_shapeScale);
      float f = fract(stripes_shape_uv.y);
      shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else {
      float sh = 1. - uv.y;
      sh -= .5;
      sh /= (noise_scale * u_resolution.y);
      sh += .5;
      float shape_scaling = .2 * (1. - u_shapeScale);
      shape = smoothstep(.45 - shape_scaling, .55 + shape_scaling, sh + .3 * (proportion - .5));
      mixer = shape;
    }

    vec4 color_mix = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);

    fragColor = vec4(color_mix.rgb, color_mix.a);
}
`}));function L(e,t=[0,0,0,1]){if(Array.isArray(e))return e.length===4?e:e.length===3?[...e,1]:L(t);if(typeof e!=`string`)return L(t);let n,r,i,a=1;if(e.startsWith(`#`))[n,r,i,a]=R(e);else if(e.startsWith(`rgb`))[n,r,i,a]=z(e);else if(e.startsWith(`hsl`))[n,r,i,a]=V(B(e));else return console.error(`Unsupported color format`,e),L(t);return[H(n,0,1),H(r,0,1),H(i,0,1),H(a,0,1)]}function R(e){return e=e.replace(/^#/,``),e.length===3&&(e=e.split(``).map(e=>e+e).join(``)),e.length===6&&(e+=`ff`),[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255,parseInt(e.slice(6,8),16)/255]}function z(e){let t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`)/255,parseInt(t[2]??`0`)/255,parseInt(t[3]??`0`)/255,t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function B(e){let t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??`0`),parseInt(t[2]??`0`),parseInt(t[3]??`0`),t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function V(e){let[t,n,r,i]=e,a=t/360,o=n/100,s=r/100,c,l,u;if(n===0)c=l=u=s;else{let e=(e,t,n)=>(n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),t=s<.5?s*(1+o):s+o-s*o,n=2*s-t;c=e(n,t,a+1/3),l=e(n,t,a),u=e(n,t,a-1/3)}return[c,l,u,i]}var H,U=e((()=>{H=(e,t,n)=>Math.min(Math.max(e,t),n)})),W=e((()=>{c(),N(),I(),U()})),G=e((()=>{W(),W()}));function K(e){let t=_(),n=h.current()===h.canvas,r=e.preset===`custom`||e.colorMode===`custom`,c=e.preset===`custom`?e:J[e.preset]||Object.values(J)[0],[l,u,f]=y(e.color1,e.color2,e.color3),p=i(null),m=d(p,{once:!1,amount:.1}),g=o(()=>n&&e.preview||!t&&m?q(e.speed/100)*5:0,[m,t,e.speed,e.preview,n]);return s(`div`,{ref:p,style:{borderRadius:e.radius,overflow:`hidden`,position:`relative`,...e.style},children:[a(X,{color1:r?l:c.color1,color2:r?u:c.color2,color3:r?f:c.color3,scale:c.scale,proportion:c.proportion/100,distortion:c.distortion/50,swirl:c.swirl/100,swirlIterations:c.swirl===0?0:c.swirlIterations,rotation:c.rotation*Math.PI/180,speed:g,seed:c.offset*10,shape:P[c.shape],shapeScale:c.shapeSize/100,softness:c.softness/100,style:e.style}),e.noise&&e.noise.opacity>0&&a(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`url("/assets/framer/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,backgroundSize:e.noise.scale*200,backgroundRepeat:`repeat`,opacity:e.noise.opacity/2}})]})}var q,J,Y,X,Z,Q=e((()=>{c(),g(),l(),D(),G(),p(),q=f(.65,0,.88,.77),J={Prism:{color1:`#050505`,color2:`#66B3FF`,color3:`#FFFFFF`,rotation:-50,proportion:1,scale:.01,speed:30,distortion:0,swirl:50,swirlIterations:16,softness:47,offset:-299,shape:`Checks`,shapeSize:45},Lava:{color1:`#FF9F21`,color2:`#FF0303`,color3:`#000000`,rotation:114,proportion:100,scale:.52,speed:30,distortion:7,swirl:18,swirlIterations:20,softness:100,offset:717,shape:`Edge`,shapeSize:12},Plasma:{color1:`#B566FF`,color2:`#000000`,color3:`#000000`,rotation:0,proportion:63,scale:.75,speed:30,distortion:5,swirl:61,swirlIterations:5,softness:100,offset:-168,shape:`Checks`,shapeSize:28},Pulse:{color1:`#8b5cf6`,color2:`#000000`,color3:`#000000`,rotation:-167,proportion:92,scale:0,speed:20,distortion:54,swirl:75,swirlIterations:3,softness:28,offset:-813,shape:`Checks`,shapeSize:79},Vortex:{color1:`#000000`,color2:`#FFFFFF`,color3:`#000000`,rotation:50,proportion:41,scale:.4,speed:20,distortion:0,swirl:100,swirlIterations:3,softness:5,offset:-744,shape:`Stripes`,shapeSize:80},Mist:{color1:`#050505`,color2:`#FF66B8`,color3:`#050505`,rotation:0,proportion:33,scale:.48,speed:39,distortion:4,swirl:65,swirlIterations:5,softness:100,offset:-235,shape:`Edge`,shapeSize:48}},m(K,{preset:{type:v.Enum,defaultValue:Object.keys(J)[0],options:[...Object.keys(J),`custom`],optionTitles:[...Object.keys(J),`Custom`]},preview:{type:v.Boolean,defaultValue:!1},colorMode:{type:v.Enum,defaultValue:`preset`,options:[`preset`,`custom`],optionTitles:[`Preset`,`Custom`],displaySegmentedControl:!0,title:`Colors`,hidden:e=>e.preset===`custom`},color1:{type:v.Color,defaultValue:`#262626`,hidden:e=>e.preset!==`custom`&&e.colorMode===`preset`},color2:{type:v.Color,defaultValue:`#75c1f0`,hidden:e=>e.preset!==`custom`&&e.colorMode===`preset`},color3:{type:v.Color,defaultValue:`#ffffff`,hidden:e=>e.preset!==`custom`&&e.colorMode===`preset`},noise:{type:v.Object,optional:!0,icon:`effect`,controls:{opacity:{type:v.Number,defaultValue:.5,min:0,max:1,step:.01},scale:{type:v.Number,defaultValue:1,min:.2,max:2,step:.1}}},rotation:{type:v.Number,defaultValue:0,min:-360,max:360,step:1,unit:`°`,hidden:e=>e.preset!==`custom`},proportion:{type:v.Number,defaultValue:35,min:0,max:100,step:1,hidden:e=>e.preset!==`custom`},scale:{type:v.Number,defaultValue:1,min:0,max:10,step:.01,hidden:e=>e.preset!==`custom`},speed:{type:v.Number,defaultValue:25,step:1,min:0,max:100},distortion:{type:v.Number,defaultValue:12,min:0,max:100,step:1,hidden:e=>e.preset!==`custom`},swirl:{type:v.Number,defaultValue:80,min:0,max:100,step:1,hidden:e=>e.preset!==`custom`},swirlIterations:{type:v.Number,defaultValue:10,min:0,max:20,step:1,title:`Iterations`,hidden:e=>e.swirl===0||e.preset!==`custom`},softness:{type:v.Number,defaultValue:100,min:0,max:100,step:1,hidden:e=>e.preset!==`custom`},offset:{type:v.Number,defaultValue:0,min:-1e3,max:1e3,step:1,hidden:e=>e.preset!==`custom`},shape:{type:v.Enum,defaultValue:`Checks`,options:Object.keys(P),hidden:e=>e.preset!==`custom`},shapeSize:{type:v.Number,defaultValue:10,min:0,max:100,step:1,hidden:e=>e.preset!==`custom`},radius:{type:v.BorderRadius,defaultValue:`0px`}}),Y={name:`Default`,params:{scale:1,rotation:0,speed:20,seed:0,color1:`hsla(0, 0%, 15%, 1)`,color2:`hsla(203, 80%, 70%, 1)`,color3:`hsla(0, 0%, 100%, 1)`,proportion:.35,softness:1,distortion:.25,swirl:.8,swirlIterations:10,shapeScale:.1,shape:P.Checks}},X=e=>{let t=o(()=>({u_scale:e.scale??Y.params.scale,u_rotation:e.rotation??Y.params.rotation,u_color1:L(e.color1,Y.params.color1),u_color2:L(e.color2,Y.params.color2),u_color3:L(e.color3,Y.params.color2),u_proportion:e.proportion??Y.params.proportion,u_softness:e.softness??Y.params.softness,u_distortion:e.distortion??Y.params.distortion,u_swirl:e.swirl??Y.params.swirl,u_swirlIterations:e.swirlIterations??Y.params.swirlIterations,u_shapeScale:e.shapeScale??Y.params.shapeScale,u_shape:e.shape??Y.params.shape}),[e.scale,e.rotation,e.color1,e.color2,e.color3,e.proportion,e.softness,e.distortion,e.swirl,e.swirlIterations,e.shapeScale,e.shape,e.speed]);return a(Z,{...e,fragmentShader:F,uniforms:t})},Z=({ref:e,fragmentShader:t,style:n,uniforms:o={},webGlContextAttributes:s,speed:c=1,seed:l=0})=>{let u=e??i(null),d=i(null);return r(()=>(u.current&&(d.current=new j(u.current,t,o,s,c,l)),()=>{d.current?.dispose()}),[t,s]),r(()=>{d.current?.setUniforms(o)},[o]),r(()=>{d.current?.setSpeed(c)},[c]),r(()=>{d.current?.setSeed(l)},[l]),a(`canvas`,{ref:u,style:n})},K.displayName=`Animated Gradient Background`}));export{Q as n,K as t};