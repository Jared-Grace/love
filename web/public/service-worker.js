var CACHE_NAME = 'love-cache-v1';
self.addEventListener('install', function () {
  self.skipWaiting();
});
self.addEventListener('activate', function (event) {
  event.waitUntil(activate());
});
async function activate() {
  var keys = await caches.keys();
  await Promise.all(keys.map(clean_old));
  await self.clients.claim();
}
async function clean_old(key) {
  if (key !== CACHE_NAME) {
    await caches.delete(key);
  }
}
self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET') {
    return;
  }
  var url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }
  if (url.pathname.indexOf('/bible/') === 0) {
    event.respondWith(stale_while_revalidate(request));
  } else {
    event.respondWith(network_first(request));
  }
});
async function stale_while_revalidate(request) {
  var cache = await caches.open(CACHE_NAME);
  var cached = await cache.match(request);
  var network = fetch(request)
    .then(function (response) {
      put_ok(cache, request, response);
      return response;
    })
    .catch(function () {
      return cached;
    });
  return cached || network;
}
async function network_first(request) {
  var cache = await caches.open(CACHE_NAME);
  try {
    var response = await fetch(request);
    put_ok(cache, request, response);
    return response;
  } catch (error) {
    var cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}
function put_ok(cache, request, response) {
  if (response && response.ok) {
    cache.put(request, response.clone());
  }
}
