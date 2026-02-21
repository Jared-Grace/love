import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
export function list_find_starts_with(list, prefix) {
  function lambda2(item2) {
    let sw = text_starts_with(item2, prefix);
    return sw;
  }
  let found = list_find(list, lambda2);
  return found;
}
