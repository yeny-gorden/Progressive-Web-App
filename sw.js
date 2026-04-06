const CACHE_NAME = 'yeny-gorden-v1'; // Ubah v1 ke v2 dst jika ada perubahan struktur besar
const assets = [
  './',
  './index.html',
  './logo.png',
  // Tambahkan file CSS atau JS lain jika ada, contoh:
  // './style.css',
  // './script.js'
];

// 1. Install Service Worker & Simpan Aset Awal (Pre-caching)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('PWA: Menyiapkan cache aset...');
      return cache.addAll(assets);
    })
  );
  // Langsung aktifkan SW baru tanpa menunggu tab ditutup
  self.skipWaiting();
});

// 2. Aktivasi & Hapus Cache Lama Otomatis
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => {
          console.log('PWA: Menghapus cache lama...', key);
          return caches.delete(key);
        })
      );
    })
  );
  // Pastikan SW langsung mengambil alih kontrol halaman
  return self.clients.claim();
});

// 3. Strategi Stale-While-Revalidate (Otomatis Update di Latar Belakang)
self.addEventListener('fetch', e => {
  // Hanya proses request GET (standar untuk aset)
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(e.request).then(cachedResponse => {
        
        // Mulai cek ke server (network) di latar belakang
        const fetchPromise = fetch(e.request).then(networkResponse => {
          // Jika berhasil dapat data dari server, update cache-nya
          if (networkResponse && networkResponse.status === 200) {
            cache.put(e.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // Jika offline dan fetch gagal, tidak masalah karena kita punya cachedResponse
        });

        // Kembalikan file dari cache secepat mungkin (jika ada)
        // Jika tidak ada di cache, baru tunggu hasil dari internet (fetchPromise)
        return cachedResponse || fetchPromise;
      });
    })
  );
});
