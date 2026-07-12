import { not } from "./not.mjs";
import { list_last_is } from "./list_last_is.mjs";
export function list_last_not_is(list, item) {
  let v = list_last_is(list, item);
  let n = not(v);
  return n;
}
