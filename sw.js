const CACHE='fea-card-v1';
const ASSETS=['./','./index.html','./styles.css','./manifest.webmanifest','./montserrat-moman.vcf','./assets/logo.png','./assets/emblem.png','./assets/qr.png','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(r=>r||fetch(event.request))));
