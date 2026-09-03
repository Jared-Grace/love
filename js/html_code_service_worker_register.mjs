import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ternary } from "./ternary.mjs";
import { html_code_element } from "./html_code_element.mjs";
export function html_code_service_worker_register(registers) {
  "On any /dev/ path the service worker is UNREGISTERED, never registered — the dev bundle rebuilds constantly and network_first would serve a stale cached copy on the first failed fetch (the 'no verses written yet' bug). Its scope is '/', so unregistering from one dev page frees every dev page. Registration stays only for non-dev pages that asked for it, preserving prod offline.";
  "what this receives is whether the page registers, which is not the same question as whether it can be installed - the caller decides that, and the two answers differ for a page that wants the cache and no install banner";
  "2026-09-03: a page that does NOT register now clears the worker on EVERY path, not only under /dev/. The old rule read the path when the answer was already in front of it. Scope is '/', so a worker one app installed controls every other app on the site - and a reader on a slow phone was being answered from a build shipped hours earlier, on an app that had never asked for offline at all. A page that wants no worker saying so on its own load is the only remedy that does not have to wait for the worker itself to stand aside, which is what makes it reach a device that is already broken.";
  "It costs the installed app its offline copy when someone opens a plain page, and that is accepted rather than overlooked: the app registers again the next time it is opened online, so the loss heals itself, while a fix that never reaches the reader does not.";
  let attributes_none = {};
  let unregister =
    "navigator.serviceWorker.getRegistrations().then(function (registrations) { registrations.forEach(function (registration) { registration.unregister(); }); });";
  let registering = text_combine_multiple([
    "if (location.pathname.indexOf('/dev/') !== -1) { ",
    unregister,
    " } else { navigator.serviceWorker.register('/service-worker.js'); }",
  ]);
  let inner = ternary(registers, registering, unregister);
  let code = text_combine_multiple([
    "if ('serviceWorker' in navigator) { ",
    inner,
    " }",
  ]);
  let r = html_code_element("script", attributes_none, code);
  return r;
}
