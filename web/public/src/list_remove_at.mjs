import { list_remove_at_count } from "../../../love/public/src/list_remove_at_count.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export function list_remove_at(list, index) {
  let e = list_remove_at_count(list, index, 1);
  let only = list_single(e);
  return only;
}
