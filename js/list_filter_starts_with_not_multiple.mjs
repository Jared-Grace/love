import { list_all } from "./list_all.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with_not_multiple(mapped, prefixes) {
  function lambda(item) {
    function lambda2(prefix) {
      let sw = text_starts_with_not(item, prefix);
      return sw;
    }
    let v = list_all(prefixes, lambda2);
    return v;
  }
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
