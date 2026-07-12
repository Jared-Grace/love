import { text_starts_with } from "./text_starts_with.mjs";
import { list_find } from "./list_find.mjs";
export function list_find_starts_with_prefixes(prefixes, item) {
  function lambda(item2) {
    let sw = text_starts_with(item, item2);
    return sw;
  }
  let any = list_find(prefixes, lambda);
  return any;
}
