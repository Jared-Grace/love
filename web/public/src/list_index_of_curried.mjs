import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
export function list_index_of_curried(list) {
  return function list_index_of_curried_result(item) {
    return list_index_of(list, item);
  };
}
