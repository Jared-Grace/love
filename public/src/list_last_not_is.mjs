import { not } from "../../../love/public/src/not.mjs";
import { list_last_is } from "../../../love/public/src/list_last_is.mjs";
export function list_last_not_is(arguments2, arg) {
  let v3 = list_last_is(arguments2, arg);
  let n = not(v3);
  return n;
}
