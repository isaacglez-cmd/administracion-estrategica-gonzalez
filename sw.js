const CACHE='ae-2026-academic-v8';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./design-vanguardista.css','./quality-fixes.js','./premium-experience.css','./premium-experience.js','./learning-evidence.css','./learning-evidence.js','./chapter-academics.css','./chapter-academics.js'];
const enhanceHtml=async response=>{
  const type=response.headers.get('content-type')||'';
  if(!type.includes('text/html')) return response;
  let html=await response.text();
  for(const css of ['design-vanguardista.css','premium-experience.css','learning-evidence.css','chapter-academics.css']) if(!html.includes(css)) html=html.replace('</head>',`<link rel="stylesheet" href="./${css}"></head>`);
  for(const js of ['quality-fixes.js','premium-experience.js','learning-evidence.js','chapter-academics.js']) if(!html.includes(js)) html=html.replace('</body>',`<script src="./${js}" defer></script></body>`);
  return new Response(html,{status:response.status,statusText:response.statusText,headers:response.headers});
};
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});await Promise.all(clients.map(client=>client.navigate(client.url)))})())});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith((async()=>{try{const network=await fetch(e.request);const response=e.request.mode==='navigate'?await enhanceHtml(network.clone()):network.clone();if(network.ok){const cache=await caches.open(CACHE);await cache.put(e.request,response.clone())}return response}catch(err){const cached=await caches.match(e.request)||await caches.match('./index.html');return e.request.mode==='navigate'&&cached?enhanceHtml(cached):cached}})())});
