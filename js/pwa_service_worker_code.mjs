import { firebase_storage_host } from "./firebase_storage_host.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { apps_pwa } from "./apps_pwa.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function pwa_service_worker_code() {
  "the service worker source (a plain browser-JS string, runs in the SW context). Strategy: SHELL (html/js/etc) = network-first so online stays fresh (the code bundle is deliberately no-cache) and offline falls back to the cached copy; DATA = stale-while-revalidate so it loads instantly, refreshes in the background, and works offline — this covers both same-origin /bible/ paths and firebase storage downloads (firebasestorage.googleapis.com), which is where the bulk bible text now lives, so the verse packages stay available offline even though they are cross-origin. One versioned cache, old versions cleaned on activate. Bump CACHE_NAME to invalidate everything. The shell fetch is bounded by SHELL_TIMEOUT_MS because a captive portal or flaky signal leaves fetch pending rather than failing, which would hang the page instead of falling back to the cached copy.";
  "v3, measured 2026-09-02: the fallback had been handing a phone one build's page and another build's bundle. A code bundle is 823 KB and is sent no-store, so it is downloaded whole on every load and a phone regularly misses the four seconds; the cached copy that answered instead was the PREVIOUS build, which asked for chunk files that the newest sending had already taken away. So the reader met a page that could not start, and when it did start it was judged by rules that had been corrected hours earlier. Bumping the name is the remedy this file names for itself, and it is only the immediate one - what falls back has to become a copy that belongs to the build asking for it.";
  "v4, same day: bumping the name only cleaned the devices that already existed, and the reader was still being answered from a build nobody had shipped for hours. The reason is that this file is served from the site root, so its scope is the whole site and its fetch handler was answering for EVERY app - including every app that never asked for a service worker and has no offline story at all. One app opting in to being installable was quietly deciding how thirty-odd other apps are allowed to receive a fix. So the handler now answers only for the apps that opted in, and lets everything else go straight to the network, where a no-store file is always the newest one. A fix that has been sent reaches the person it was sent for; that is worth more than an app that was never installed being readable on a train.";
  let r2 = firebase_storage_host();
  let combined = text_combine_multiple([
    "  if (url.hostname === '",
    r2,
    "') {",
  ]);
  let apps = apps_pwa();
  function lambda(app) {
    let quoted = text_combine_multiple(["'", app, "'"]);
    return quoted;
  }
  let quoted_apps = list_map(apps, lambda);
  let joined_apps = list_join_comma(quoted_apps);
  let apps_line = text_combine_multiple([
    "var PWA_APPS = [",
    joined_apps,
    "];",
  ]);
  let lines = [
    "var CACHE_NAME = 'love-cache-v4';",
    "var SHELL_TIMEOUT_MS = 4000;",
    apps_line,
    "self.addEventListener('install', function () {",
    "  self.skipWaiting();",
    "});",
    "self.addEventListener('activate', function (event) {",
    "  event.waitUntil(activate());",
    "});",
    "async function activate() {",
    "  var keys = await caches.keys();",
    "  await Promise.all(keys.map(clean_old));",
    "  await self.clients.claim();",
    "}",
    "async function clean_old(key) {",
    "  if (key !== CACHE_NAME) {",
    "    await caches.delete(key);",
    "  }",
    "}",
    "function pwa_asset_is(pathname) {",
    "  var name = pathname.split('/').pop();",
    "  if (name === '') {",
    "    return true;",
    "  }",
    "  for (var i = 0; i < PWA_APPS.length; i++) {",
    "    var app = PWA_APPS[i];",
    "    if (name.indexOf(app) === 0) {",
    "      return true;",
    "    }",
    "    if (name.indexOf('.' + app + '.js') !== -1) {",
    "      return true;",
    "    }",
    "  }",
    "  return false;",
    "}",
    "self.addEventListener('fetch', function (event) {",
    "  var request = event.request;",
    "  if (request.method !== 'GET') {",
    "    return;",
    "  }",
    "  var url = new URL(request.url);",
    combined,
    "    event.respondWith(stale_while_revalidate(request));",
    "    return;",
    "  }",
    "  if (url.origin !== self.location.origin) {",
    "    return;",
    "  }",
    "  if (url.pathname.indexOf('/bible/') === 0) {",
    "    event.respondWith(stale_while_revalidate(request));",
    "    return;",
    "  }",
    "  if (pwa_asset_is(url.pathname)) {",
    "    event.respondWith(network_first(request));",
    "  }",
    "});",
    "async function stale_while_revalidate(request) {",
    "  var cache = await caches.open(CACHE_NAME);",
    "  var cached = await cache.match(request);",
    "  var network = fetch(request)",
    "    .then(function (response) {",
    "      put_ok(cache, request, response);",
    "      return response;",
    "    })",
    "    .catch(function () {",
    "      return cached;",
    "    });",
    "  return cached || network;",
    "}",
    "async function network_first(request) {",
    "  var cache = await caches.open(CACHE_NAME);",
    "  try {",
    "    var response = await fetch_timeout(request, SHELL_TIMEOUT_MS);",
    "    put_ok(cache, request, response);",
    "    return response;",
    "  } catch (error) {",
    "    var cached = await cache.match(request);",
    "    if (cached) {",
    "      return cached;",
    "    }",
    "    throw error;",
    "  }",
    "}",
    "function fetch_timeout(request, ms) {",
    "  return new Promise(function (resolve, reject) {",
    "    var timer = setTimeout(function () {",
    "      reject(new Error('timeout'));",
    "    }, ms);",
    "    function settled(callback) {",
    "      return function (value) {",
    "        clearTimeout(timer);",
    "        callback(value);",
    "      };",
    "    }",
    "    fetch(request).then(settled(resolve), settled(reject));",
    "  });",
    "}",
    "function put_ok(cache, request, response) {",
    "  if (response && response.ok) {",
    "    cache.put(request, response.clone());",
    "  }",
    "}",
    "",
  ];
  let r = list_join_newline(lines);
  return r;
}
