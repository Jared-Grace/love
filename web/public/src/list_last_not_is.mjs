import { not } from "../../../love/public/src/not.mjs";
import { list_last_is } from "../../../love/public/src/list_last_is.mjs";
export function list_last_not_is(list, item) {
  let v = list_last_is(list, item);
  let n = not(v);
  return n;
}
