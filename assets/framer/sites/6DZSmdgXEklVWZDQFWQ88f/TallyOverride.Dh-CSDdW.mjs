import{t as e}from"./rolldown-runtime.T_CFW6Lp.mjs";import{F as t,L as n,N as r,c as i,o as a,w as o,z as s}from"./react.D6e4EpvH.mjs";function c(e){return n=>{let[a,o]=t(``);return r(()=>{let e=new URLSearchParams(s.location.search),t=`https://tally.so/embed/1AWvXL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;e.forEach((e,n)=>{t+=`&${n}=${encodeURIComponent(e)}`}),o(`
                <iframe 
                    src="${t}"
                    data-tally-src="${t}"
                    loading="lazy" 
                    width="100%" 
                    height="220" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0" 
                    title="AIW - Survey Page">
                </iframe>
                <script>
                    var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
                <\/script>
            `)},[]),i(e,{...n,html:a})}}var l=e((()=>{n(),a(),o()}));export{c as n,l as t};