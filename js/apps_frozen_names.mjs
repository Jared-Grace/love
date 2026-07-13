import { apps_frozen } from "./apps_frozen.mjs";
import { list_map } from "./list_map.mjs";
import { app_prefix_without_fn } from "./app_prefix_without_fn.mjs";
export function apps_frozen_names() {
  let fns = apps_frozen();
  let names = list_map(fns, app_prefix_without_fn);
  return names;
}
