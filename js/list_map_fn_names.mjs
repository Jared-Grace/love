import { list_map } from "./list_map.mjs";
import { property_path_get } from "./property_path_get.mjs";
export function list_map_fn_names(usable) {
  function lambda_name(o) {
    let n = property_path_get(o, ["fn", "name"]);
    return n;
  }
  let names = list_map(usable, lambda_name);
  return names;
}
