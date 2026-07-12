import { list_add } from "./list_add.mjs";
import { list_copy } from "./list_copy.mjs";
export function list_concat_single_right(list, single) {
  let concated = list_copy(list);
  list_add(concated, single);
  return concated;
}
