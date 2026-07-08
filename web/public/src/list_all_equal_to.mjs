import { list_all } from "../../../love/public/src/list_all.mjs";
import { equal_curried } from "../../../love/public/src/equal_curried.mjs";
export function list_all_equal_to(list, item) {
  let r = equal_curried(item);
  let eq = list_all(list, r);
  return eq;
}
