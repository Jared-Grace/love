import { list_remove } from "../../../love/public/src/list_remove.mjs";
export function list_remove_curried_right(item) {
  let r2 = function list_remove_curried_right_result(list) {
    let r = list_remove(list, item);
    return r;
  };
  return r2;
}
