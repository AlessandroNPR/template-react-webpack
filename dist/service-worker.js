if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let f={};const o=e=>i(e,t),c={module:{uri:t},exports:f,require:o};s[t]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(n(...e),f)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/bundle.js",revision:"34d7fbf024df41e5adf60e9eecbb3c43"},{url:"/bundle.js.LICENSE.txt",revision:"fb6fca4f0fa26a7e27d26480a74532c9"},{url:"/css/style.css",revision:"b79647d1e84743e17ccf22c2a75e4026"},{url:"/index.html",revision:"f9520479419195fa22e9d09d2e1cf33f"},{url:"/main.css",revision:"01982bc14bb7f164fa3134e99c6a3533"}],{})}));
