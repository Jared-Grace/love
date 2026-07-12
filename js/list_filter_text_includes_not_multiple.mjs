import { text_includes_not_multiple } from "./text_includes_not_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_text_includes_not_multiple(list, parts) {
  function lambda(item) {
    let n = text_includes_not_multiple(item, parts);
    return n;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
