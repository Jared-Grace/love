import { not } from "../../../love/public/src/not.mjs";
import { list_index_is } from "../../../love/public/src/list_index_is.mjs";
export function list_index_not_is(list, index) {
  let b = list_index_is(list, index);
  let n = not(b);
}
