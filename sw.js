// Service Worker (for offline capability)

const CACHE_NAME = "todo-list-cache-v1";
// const urlsToCache = [
//   "/",
//   "/index.html",
//   "/style.css",
//   "/script.js",
//   "/manifest.json",
//   "/assets/todo-fav.png",
//   '/connecting-sw.js'
// ];

// Install event
self.addEventListener("install", (event) => {
  // Skip waiting to activate the service worker immediately
  event.waitUntil(self.skipWaiting());
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cachedResponse) => {
        // If a cached response exists, return it
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise, fetch from the network
        return fetch(event.request).then((networkResponse) => {
          // Clone the response because responses are streams
          const responseClone = networkResponse.clone();

          // Open the cache and store the fetched response
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });

          return networkResponse;
        });
      })
      .catch(() => {
        // Optionally handle failed requests (e.g., offline fallback)
        return caches.match("/offline.html"); // Create an offline page if needed
      })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
