const CACHE='ae-final-con-portada-v1';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET') return;
 event.respondWith(
   caches.match(event.request).then(cached=>cached||fetch(event.request).then(resp=>{
     if(resp && resp.status===200 && new URL(event.request.url).origin===self.location.origin){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));}
     return resp;
   }).catch(()=> event.request.mode==='navigate' ? caches.match('./index.html') : caches.match(event.request)))
 );
});
