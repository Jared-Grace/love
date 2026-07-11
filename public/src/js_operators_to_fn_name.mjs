import { list_map } from "../../../love/public/src/list_map.mjs";
import { property_path_get } from "../../../love/public/src/property_path_get.mjs";
export function js_operators_to_fn_name(usable) {
  function lambda_name(o) {
    let n = property_path_get(o, ["fn", "name"]);
    return n;
  }
  let names = list_map(usable, lambda_name);
  return names;
}
