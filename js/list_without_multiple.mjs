import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_without_multiple(list, items) {
  "The first list with every member of the second taken out of it.";
  function kept_is(item) {
    let kept = list_includes_not(items, item);
    return kept;
  }
  let filtered = list_filter(list, kept_is);
  return filtered;
}
