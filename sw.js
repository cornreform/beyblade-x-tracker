const CACHE_NAME = 'beyblade-x-v3';
const PAGE_CACHE = 'beyblade-x-pages-v3';
const IMAGE_CACHE = 'beyblade-x-images-v3';

// Install: immediately activate
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate: delete ALL old caches immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME && k !== PAGE_CACHE && k !== IMAGE_CACHE)
          .map((k) => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

// Listen for skipWaiting message from page
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Fetch: network-first for everything, cache images for offline
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip non-GET and extension requests
  if (event.request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;
  
  // Images: cache-first for offline support
  if (url.pathname.match(/\.(png|jpg|jpeg|webp|svg)$/)) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(IMAGE_CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }
  
  // HTML, JS, CSS: NETWORK FIRST, fallback to cache
  event.respondWith(
    fetch(event.request).then((response) => {
      if (response && response.status === 200) {
        const clone = response.clone();
        caches.open(PAGE_CACHE).then((cache) => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => {
      return caches.match(event.request).then((cached) => {
        return cached || new Response('Offline', { status: 503 });
      });
    })
  );
});
