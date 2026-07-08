import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
export function list_concat_single_right(list, single) {
  let copy = list_copy(list);
  list_add(copy, single);
  return copy;
}
