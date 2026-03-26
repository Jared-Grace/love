import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_curried_right(lambda$item) {
  let r = function list_map_curried_right_result(list) {
    let mapped = list_map(list, lambda$item);
    return mapped;
  };
  return r;
}
