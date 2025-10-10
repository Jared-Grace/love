import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
export function list_filter_starts_with(list, prefix) {
  function lambda(item) {
    let sw = string_starts_with(item, prefix);
    return sw;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
