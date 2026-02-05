import { not } from "../../../love/public/src/not.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
export function list_not_is(value) {
  let a = list_is(value);
  let nl = not(a);
  return nl;
}
