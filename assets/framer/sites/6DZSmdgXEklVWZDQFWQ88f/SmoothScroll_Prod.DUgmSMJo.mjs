/* SmoothScroll disabled — Lenis was causing scroll jank by interpolating
   scroll position via requestAnimationFrame, which forced full repaints
   of expensive elements (gradients, box-shadows, animations) on every
   frame. Stubbed to a pass-through component so native scroll takes over.
   Original preserved at SmoothScroll_Prod.DUgmSMJo.mjs.bak */
import{c as i}from"./react.D6e4EpvH.mjs";
var b=function(t){return i("div",{style:{display:"contents"},children:t&&t.children});};
b.displayName="Smooth Scroll";
var x=function(){};
export{x as n,b as t};
