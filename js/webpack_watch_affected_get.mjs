import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
export function webpack_watch_affected_get(f_name, app_deps, a_name_of) {
  arguments_assert(arguments, 3);
  function lambda(ad) {
    let deps = property_get(ad, "deps");
    let match = deps.includes(f_name);
    return match;
  }
  let matched = list_filter(app_deps, lambda);
  let names = list_map(matched, a_name_of);
  return names;
}
