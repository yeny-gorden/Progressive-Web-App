// Service Worker Minimal agar PWA bisa diinstal
self.addEventListener('fetch', function(event) {
    // Biarkan aplikasi mengambil data dari internet secara normal
    event.respondWith(fetch(event.request));
});
