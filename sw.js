const CACHE='ae-2026-vanguard-v3';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./design-vanguardista.css'];
const injectVanguard=async response=>{
  const type=response.headers.get('content-type')||'';
  if(!type.includes('text/html')) return response;
  const html=await response.text();
  const linked=html.includes('design-vanguardista.css')?html:html.replace('</head>','<link rel="stylesheet" href="./design-vanguardista.css"></head>');
  return new Response(linked,{status:response.status,statusText:response.statusText,headers:response.headers});
};
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{
  e.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
    const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    await Promise.all(clients.map(client=>client.navigate(client.url)));
  })());
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith((async()=>{
    try{
      const network=await fetch(e.request);
      const response=e.request.mode==='navigate'?await injectVanguard(network.clone()):network.clone();
      const cache=await caches.open(CACHE);await cache.put(e.request,response.clone());
      return response;
    }catch(err){
      const cached=await caches.match(e.request)||await caches.match('./index.html');
      return e.request.mode==='navigate'&&cached?injectVanguard(cached):cached;
    }
  })());
});
