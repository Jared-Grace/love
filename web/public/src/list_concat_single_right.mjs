import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function list_concat_single_right(list, single) {
  let copy = list_copy(list);
  list_add(list2, item);
  let concated = [single];
  list_add_multiple(concated, list);
  return concated;
}
