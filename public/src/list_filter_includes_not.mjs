import { text_includes_not } from "../../../love/public/src/text_includes_not.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_includes_not(mapped, part) {
  function lambda(item) {
    let n = text_includes_not(item, part);
    return n;
  }
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
