import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function list_without_multiple(list, items) {
  "The first list with every member of the second taken out of it.";
  function kept_is(item) {
    let dropped = list_includes(items, item);
    let kept = not(dropped);
    return kept;
  }
  let filtered = list_filter(list, kept_is);
  return filtered;
}
