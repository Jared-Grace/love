import { list_all } from "./list_all.mjs";
import { list_includes_curried } from "./list_includes_curried.mjs";
export function list_included_in_is(list, items) {
  let r = list_includes_curried(items);
  let includes_all = list_all(list, r);
  return includes_all;
}
