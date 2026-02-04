import { not } from "../../../love/public/src/not.mjs";
import { list_index_last_is } from "../../../love/public/src/list_index_last_is.mjs";
export function list_index_last_not_is(reversed, index) {
  let b = list_index_last_is(reversed, index);
  let n = not(b);
  return n;
}
