const CACHE='ae-2026-learning-v7';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./design-vanguardista.css','./quality-fixes.js','./premium-experience.css','./premium-experience.js','./learning-evidence.css','./learning-evidence.js'];
const enhanceHtml=async response=>{
  const type=response.headers.get('content-type')||'';
  if(!type.includes('text/html')) return response;
  let html=await response.text();
  if(!html.includes('design-vanguardista.css')) html=html.replace('</head>','<link rel="stylesheet" href="./design-vanguardista.css"></head>');
  if(!html.includes('premium-experience.css')) html=html.replace('</head>','<link rel="stylesheet" href="./premium-experience.css"></head>');
  if(!html.includes('learning-evidence.css')) html=html.replace('</head>','<link rel="stylesheet" href="./learning-evidence.css"></head>');
  if(!html.includes('quality-fixes.js')) html=html.replace('</body>','<script src="./quality-fixes.js" defer></script></body>');
  if(!html.includes('premium-experience.js')) html=html.replace('</body>','<script src="./premium-experience.js" defer></script></body>');
  if(!html.includes('learning-evidence.js')) html=html.replace('</body>','<script src="./learning-evidence.js" defer></script></body>');
  return new Response(html,{status:response.status,statusText:response.statusText,headers:response.headers});
};
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});await Promise.all(clients.map(client=>client.navigate(client.url)))})())});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith((async()=>{try{const network=await fetch(e.request);const response=e.request.mode==='navigate'?await enhanceHtml(network.clone()):network.clone();if(network.ok){const cache=await caches.open(CACHE);await cache.put(e.request,response.clone())}return response}catch(err){const cached=await caches.match(e.request)||await caches.match('./index.html');return e.request.mode==='navigate'&&cached?enhanceHtml(cached):cached}})())});
