import { not } from "../../../love/public/src/not.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
export function list_multiple_not_is(list) {
  let m = list_multiple_is(list);
  let n = not(m);
  return n;
}
