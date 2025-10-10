import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
export function list_copy_reverse(previous) {
  let copy = list_copy(previous);
  list_reverse(copy);
  return copy;
}
