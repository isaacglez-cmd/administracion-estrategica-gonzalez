const CACHE='ae-2026-final-independent-v13';
const ASSETS=[
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './design-vanguardista.css',
  './quality-fixes.js',
  './premium-experience.css',
  './premium-experience.js',
  './learning-evidence.css',
  './learning-evidence.js',
  './chapter-academics.css',
  './chapter-academics.js',
  './core-academic-content.css',
  './core-academic-content.js',
  './advanced-academic-content.css',
  './advanced-academic-content.js',
  './segunda-pasada-1-5.css',
  './segunda-pasada-1-5.js',
  './segunda-pasada-6-10.js',
  './assessment-state.js'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;

  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const network=await fetch(request);
        if(network.ok){
          const cache=await caches.open(CACHE);
          await cache.put('./index.html',network.clone());
        }
        return network;
      }catch(error){
        return caches.match('./index.html');
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    const cached=await caches.match(request);
    if(cached)return cached;
    const network=await fetch(request);
    if(network.ok){
      const cache=await caches.open(CACHE);
      await cache.put(request,network.clone());
    }
    return network;
  })());
});
