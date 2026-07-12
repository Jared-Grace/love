import { not } from "./not.mjs";
import { list_is } from "./list_is.mjs";
export function list_not_is(value) {
  let a = list_is(value);
  let nl = not(a);
  return nl;
}
