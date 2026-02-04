import { not } from "../../../love/public/src/not.mjs";
import { list_last_is } from "../../../love/public/src/list_last_is.mjs";
export function list_last_not_is(list, item) {
  let v3 = list_last_is(list, item);
  let n = not(v3);
  return n;
}
