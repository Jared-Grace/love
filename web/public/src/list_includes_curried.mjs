import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_includes_curried(list) {
  return function list_includes_curried_result(item) {
    return list_includes(list, item);
  };
}
