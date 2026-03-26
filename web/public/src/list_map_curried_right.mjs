import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_curried_right(lambda$item) {
  return function list_map_curried_right_result(list) {
    return list_map(list, lambda$item);
  };
}
