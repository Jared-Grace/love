import { list_map } from "../../../love/public/src/list_map.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export function list_map_path_join_left(list, f_name) {
  function lambda(item) {
    let joined = path_join([item, f_name]);
    return joined;
  }
  let mapped2 = list_map(list, lambda);
  return mapped2;
}
