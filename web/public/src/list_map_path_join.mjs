import { list_map } from "./list_map.mjs";
import { path_join } from "./path_join.mjs";
export function list_map_path_join(list, f_name) {
  function lambda(item) {
    let joined = path_join([item, f_name]);
    return joined;
  }
  let mapped2 = list_map(list, lambda);
  return mapped2;
}
