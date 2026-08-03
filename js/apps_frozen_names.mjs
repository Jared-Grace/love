import { apps_frozen } from "./apps_frozen.mjs";
import { list_map } from "./list_map.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
export function apps_frozen_names() {
  "The name prefix of every app that must not be changed in prod or deleted, for a check that has a name in hand rather than an entry point.";
  let fns = apps_frozen();
  let names = list_map(fns, app_shared_name_prefix_without_fn);
  return names;
}
