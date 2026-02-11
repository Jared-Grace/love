import { list_all } from "../../../love/public/src/list_all.mjs";
import { equal_curried } from "../../../love/public/src/equal_curried.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function list_all_equal(list) {
  let first = list_first(list);
  let r = equal_curried(first);
  let eq = list_all(list, r);
  return eq;
}
