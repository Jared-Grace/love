import { list_index_is } from "./list_index_is.mjs";
export function list_index_is_curried(list) {
  let r = function list_index_is_curry_result(index) {
    let ii = list_index_is(list, index);
    return ii;
  };
  return r;
}
