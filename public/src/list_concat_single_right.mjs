import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
export function list_concat_single_right(list, single) {
  let concated = list_copy(list);
  list_add(concated, single);
  return concated;
}
