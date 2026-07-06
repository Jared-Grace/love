import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
export function list_pair_other(list, item) {
  list_remove(list, item);
  let other = list_single(list);
  return other;
}
