"use strict";const CACHE_NAME="IvanyBlogHelperCache";let cachelist=[];self.db={read:(e,t)=>(t||(t={type:"text"}),new Promise(((t,s)=>{caches.open(CACHE_NAME).then((s=>{s.match(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`)).then((function(e){e||t(null),e.text().then((e=>t(e)))})).catch((()=>{t(null)}))}))}))),write:(e,t)=>new Promise(((s,n)=>{caches.open(CACHE_NAME).then((function(n){n.put(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`),new Response(t)),s()})).catch((()=>{n()}))}))};const set_newest_version=async e=>lfetch(e,e[0]).then((e=>e.json())).then((async e=>{await db.write("blog_version",e.version)}));setInterval((async()=>{await set_newest_version(mirror)}),12e4),setTimeout((async()=>{await set_newest_version(mirror)}),1e3),self.addEventListener("install",(async function(e){self.skipWaiting(),e.waitUntil(caches.open(CACHE_NAME).then((function(e){return console.log("Opened cache"),e.addAll(cachelist)})))})),self.addEventListener("fetch",(async e=>{try{e.respondWith(handle(e.request))}catch(t){e.respondWith(handleerr(e.request,t))}}));const handleerr=async(e,t)=>new Response(`<h1>CDN分流器遇到了致命错误</h1>\n    <b>${t}</b>`,{headers:{"content-type":"text/html; charset=utf-8"}}),lfetch=async(e,t)=>{let s=new AbortController;const n=async e=>new Response(await e.arrayBuffer(),{status:e.status,headers:e.headers});return Promise.any||(Promise.any=function(e){return new Promise(((t,s)=>{let n=(e=Array.isArray(e)?e:[]).length,o=[];if(0===n)return s(new AggregateError("All promises were rejected"));e.forEach((e=>{e.then((e=>{t(e)}),(e=>{n--,o.push(e),0===n&&s(new AggregateError(o))}))}))}))}),Promise.any(e.map((e=>new Promise(((t,o)=>{fetch(e,{signal:s.signal}).then(n).then((e=>{200==e.status?(s.abort(),t(e)):o(e)}))})))))};event.respondWith(caches.match(event.request).then((e=>e||fetch(event.request).catch((()=>caches.match("/404.html"))))));const fullpath=e=>((e=e.split("?")[0].split("#")[0]).match(/\/$/)&&(e+="index"),e.match(/\.[a-zA-Z]+$/)||(e+=".html"),e),generate_blog_urls=(e,t,s)=>{const n=["https://ivany.s3.ladydaily.com"];for(var o in n)n[o]+=s;return n},mirror=[],get_newest_version=async e=>lfetch(e,e[0]).then((e=>e.json())).then(res.version),handle=async e=>{const t=e.url,s=new URL(t),n=s.pathname;return"blog.ivany.xyz"===s.hostname?lfetch(["https://ivany.s3.ladydaily.com"+(o=n,(o=o.split("?")[0].split("#")[0]).match(/\/$/)&&(o+="index"),o.match(/\.[a-zA-Z]+$/)||(o+=".html"),o)]):fetch(e);var o};var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"ivany"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"826706958fb6db8852240a40d3a4d3e0",url:"./404.html"},{revision:"77d59bcbc95af40ae25daf2d9a0a99df",url:"./index.html"},{revision:"826901386143ce061cd89863a06b1f88",url:"./js/main.js"},{revision:"f709c236467fcd82111d9077996bbe4d",url:"./js/custom.js"},{revision:"884d95e4590f231245d4b264d9e30214",url:"./css/index.css"},{revision:"1e9b67c29edc691daa0c93b3ee412046",url:"./css/custom.css"},{revision:"4ef3cfb882b6dd4128da4c8745e9a507",url:"./img/404.jpg"},{revision:"b40efd6c0e10a7caba084c711d76e310",url:"./img/footer/CDN-jsDelivr-orange.svg"},{revision:"77f0a6d80f5b049ecd8377de31fff3d9",url:"./img/footer/Copyright-BY--NC--SA 4.svg"},{revision:"4c529e432a05854034c8120c20d9812c",url:"./img/footer/Frame-Hexo-blue.svg"},{revision:"8be4fd87389c3bd65ae9a0697dc270db",url:"./img/footer/ivany-摸鱼中.svg"},{revision:"2933868d1a9cfd80ade8f4ea95e806e8",url:"./img/footer/ivany-晚安呐.svg"},{revision:"e5e8dcc2c4a69afadd03731e00b8deec",url:"./img/footer/moe.svg"},{revision:"c7d5c1efd84c41246fc809a44e4e0a2e",url:"./img/footer/Source-Github-d021d6.svg"},{revision:"973244a3db55c1dcdd9f158158082cd5",url:"./img/footer/Theme-Butterfly-6513df.svg"},{revision:"e774b052e6b1a2f5f716c6bf71222af2",url:"./img/footer/vercel.svg"},{revision:"d5d51c0c23a6fe6b5e445939044e6b65",url:"./img/error/friend_404.gif"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();