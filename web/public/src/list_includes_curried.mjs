import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_includes_curried(list) {
  let r = function list_includes_curried_result(item) {
    let includes = list_includes(list, item);
    return includes;
  };
  return r;
}
