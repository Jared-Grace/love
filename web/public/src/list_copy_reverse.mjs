import { list_reverse } from "./list_reverse.mjs";
import { list_copy } from "./list_copy.mjs";
export function list_copy_reverse(previous) {
  let copy = list_copy(previous);
  list_reverse(copy);
  return copy;
}
