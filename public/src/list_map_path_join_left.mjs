import { marker } from "../../../love/public/src/marker.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export function list_map_path_join_left(list, f_name) {
  marker("1");
  function lambda(item) {
    let joined = path_join([f_name, item]);
    return joined;
  }
  let mapped2 = list_map(list, lambda);
  return mapped2;
}
