import { html_code_element } from "./html_code_element.mjs";
import { ternary } from "./ternary.mjs";
export function html_code_service_worker_register(registers) {
  "On any /dev/ path the service worker is UNREGISTERED, never registered — the dev bundle rebuilds constantly and network_first would serve a stale cached copy on the first failed fetch (the 'no verses written yet' bug). Its scope is '/', so unregistering from one dev page frees every dev page. Registration stays only for non-dev pages that asked for it, preserving prod offline.";
  "what this receives is whether the page registers, which is not the same question as whether it can be installed - the caller decides that, and the two answers differ for a page that wants the cache and no install banner";
  let attributes_none = {};
  let register = ternary(
    registers,
    " else { navigator.serviceWorker.register('/service-worker.js'); }",
    "",
  );
  let code =
    "if ('serviceWorker' in navigator) { if (location.pathname.indexOf('/dev/') !== -1) { navigator.serviceWorker.getRegistrations().then(function (registrations) { registrations.forEach(function (registration) { registration.unregister(); }); }); }" +
    register +
    " }";
  let r = html_code_element("script", attributes_none, code);
  return r;
}
