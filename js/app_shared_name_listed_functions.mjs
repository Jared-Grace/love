import { arguments_assert } from "./arguments_assert.mjs";
import { apps_pwa } from "./apps_pwa.mjs";
import { apps_service_worker } from "./apps_service_worker.mjs";
import { bundle_size_ceilings } from "./bundle_size_ceilings.mjs";
export function app_shared_name_listed_functions() {
  arguments_assert(arguments, 0);
  ("Every function that lists apps by their short names, written out as plain words. A name in a list follows no rename, so an app renamed without this list quietly drops out of each one: the search app lost its phone copy that way until it was moved by hand.");
  ("Each one is a list of names and nothing else, which is what makes moving every whole copy of the old name in it safe.");
  let r = [apps_pwa, apps_service_worker, bundle_size_ceilings];
  return r;
}
