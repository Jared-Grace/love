import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function pwa_service_worker_code() {
  let r = text_combine_multiple([
    "self.addEventListener('install', function () {\n",
    "  self.skipWaiting();\n",
    "});\n",
    "self.addEventListener('activate', function (event) {\n",
    "  event.waitUntil(self.clients.claim());\n",
    "});\n",
  ]);
  return r;
}
