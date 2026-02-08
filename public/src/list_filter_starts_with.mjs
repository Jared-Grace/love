import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
export function list_filter_starts_with(list, prefix) {
  function lambda(item) {
    let sw = text_starts_with(item, prefix);
    return sw;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
