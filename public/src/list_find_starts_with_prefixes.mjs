import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
export function list_find_starts_with_prefixes(prefixes, item) {
  function lambda2(item2) {
    let sw = text_starts_with(item, item2);
    return sw;
  }
  let any = list_find(prefixes, lambda2);
  return any;
}
