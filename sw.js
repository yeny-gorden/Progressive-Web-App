const CACHE_NAME = 'Kalkulator Gorden Pro v4.1 - Yeny Gorden';
const ASSETS = [
  './',
  './index.html',
  './logo.png',
  './harga.json',
  './manifest.json'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Strategi: Network First, Fallback to Cache
// Bagus untuk harga.json agar selalu update jika ada sinyal, tapi pakai cache jika offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
