import { list_not_is } from "../../../love/public/src/list_not_is.mjs";
export function list_ensure(n) {
  let nl = list_not_is(n);
  if (nl) {
    n = [n];
  }
  return n;
}
