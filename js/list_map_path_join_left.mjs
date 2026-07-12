import { list_map } from "./list_map.mjs";
import { path_join } from "./path_join.mjs";
export function list_map_path_join_left(list, folder_prefix) {
  function lambda(item) {
    let joined = path_join([folder_prefix, item]);
    return joined;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
