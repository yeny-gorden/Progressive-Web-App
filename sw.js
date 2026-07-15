const CACHE_NAME = 'yeny-gorden-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://unpkg.com/html5-qrcode'
];

// Tahap Install: Melakukan caching aset-aset utama
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 PWA Cache: Memasang aset statis');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Tahap Activate: Membersihkan cache versi lama jika ada pembaruan
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('🗑️ PWA Cache: Menghapus cache lama yang usang');
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Tahap Fetch: Strategi Cache First, Network Fallback untuk aset statis dan pustaka eksternal
self.addEventListener('fetch', (event) => {
  // Abaikan request dari modul Firebase Cloud Firestore agar tidak mengganggu sinkronisasi SDK bawaan
  if (event.request.url.includes('firestore.googleapis.com') || event.request.url.includes('firebase')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
