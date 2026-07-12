import { not } from "./not.mjs";
import { list_first_is } from "./list_first_is.mjs";
export function list_first_not_is(verses, v) {
  let v2 = list_first_is(verses, v);
  let n = not(v2);
  return n;
}
