import { text_includes } from "../../../love/public/src/text_includes.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_includes(mapped, part) {
  function lambda(item) {
    let n = text_includes(item, part);
    return n;
  }
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
