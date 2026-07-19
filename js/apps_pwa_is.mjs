import { apps_pwa } from "./apps_pwa.mjs";
import { list_includes } from "./list_includes.mjs";
export function apps_pwa_is(name) {
  let r = list_includes(apps_pwa(), name);
  return r;
}
