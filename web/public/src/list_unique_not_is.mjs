import { not } from "../../../love/public/src/not.mjs";
import { list_unique_is } from "../../../love/public/src/list_unique_is.mjs";
export function list_unique_not_is(mapped) {
  let b = list_unique_is(mapped);
  let a = not(b);
  return a;
}
