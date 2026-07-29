import { apps_pwa } from "./apps_pwa.mjs";
import { list_concat } from "./list_concat.mjs";
export function apps_service_worker() {
  ("apps whose pages register the service worker: the shell and the bible data are kept on disk, so a return visit paints from there instead of waiting on the network, and the pages still open with no network at all. offering to install is the other opt-in and lives in ",
    apps_pwa.name,
    " - an installable app must register, so every name there is here too, but a name may be here alone when the wanted thing is only the speed. add one short app name per line to opt an app in");
  let caching_only = ["search"];
  let a = apps_pwa();
  let r = list_concat(a, caching_only);
  return r;
}
