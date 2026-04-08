import { list_remove } from "../../../love/public/src/list_remove.mjs";
export function list_remove_curried_right(item) {
  return function list_remove_curried_right_result(list) {
    return list_remove(list, item);
  };
}
