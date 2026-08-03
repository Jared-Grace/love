import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { list_map } from "./list_map.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { list_concat } from "./list_concat.mjs";
export function apps_frozen_names_all() {
  "Every way a frozen app can be named, both the short word and the prefix built from it, so a check meets it either way round.";
  let names = apps_frozen_names();
  let prefixed = list_map(names, app_shared_name_prefixed);
  let all = list_concat(names, prefixed);
  return all;
}
