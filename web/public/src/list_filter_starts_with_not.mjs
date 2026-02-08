import { text_starts_with_not } from "../../../love/public/src/text_starts_with_not.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_starts_with_not(mapped, prefix) {
  function lambda(item) {
    let sw = text_starts_with_not(item, prefix);
    return sw;
  }
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
