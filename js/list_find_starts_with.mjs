import { text_starts_with } from "./text_starts_with.mjs";
import { list_find } from "./list_find.mjs";
export function list_find_starts_with(list, prefix) {
  function lambda(item) {
    let sw = text_starts_with(item, prefix);
    return sw;
  }
  let found = list_find(list, lambda);
  return found;
}
