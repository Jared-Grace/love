import { not } from "./not.mjs";
import { list_index_is } from "./list_index_is.mjs";
export function list_index_not_is(list, index) {
  let b = list_index_is(list, index);
  let n = not(b);
  return n;
}
