import { list_all_equal_to } from "../../../love/public/src/list_all_equal_to.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function list_all_equal(list) {
  let first = list_first(list);
  let eq = list_all_equal_to(list, first);
  return eq;
}
