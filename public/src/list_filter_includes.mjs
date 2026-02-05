import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_includes(mapped, part) {
  function lambda(item) {
    let n = string_includes(item, part);
    return n;
  }
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
