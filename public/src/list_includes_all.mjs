import { list_all } from "../../../love/public/src/list_all.mjs";
import { list_includes_curried } from "../../../love/public/src/list_includes_curried.mjs";
export function list_includes_all(list, items) {
  let r2 = list_includes_curried(items);
  let includes_all = list_all(list, r2);
  return includes_all;
}
