import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
export function list_index_of_curried(list) {
  let r = function list_index_of_curried_result(item) {
    let index = list_index_of(list, item);
    return index;
  };
  return r;
}
