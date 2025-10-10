import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
export function list_unique_reverse(previous) {
  let reversed = list_copy_reverse(previous);
  let copy = list_unique(reversed);
  list_reverse(copy);
  return copy;
}
