import { list_empty_is } from "./list_empty_is.mjs";
import { null_is } from "./null_is.mjs";
export function list_empty_is_or_null(list) {
  "Whether a list holds nothing, counting a missing list as holding nothing too. Read-only, pure.";
  "The two are one question wherever the list is an answer somebody looked up: no entry at all and an entry holding nothing both mean nothing was found, and a caller that asks only one of them silently treats the other as though something had been. Written down because that mistake is invisible - the shape that is checked for stops occurring, and the branch goes quiet rather than going wrong.";
  "The missing case is answered first and on its own, because asking a missing list how long it is throws, and the two questions cannot be joined into one by a word that reads both sides before choosing.";
  let absent = null_is(list);
  if (absent) {
    return true;
  }
  let empty_is = list_empty_is(list);
  return empty_is;
}
