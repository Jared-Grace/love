import { string_includes_not } from "../../../love/public/src/string_includes_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_includes(mapped, part) {
  marker("1");
  function lambda(item) {
    let n = string_includes_not(item, part);
    return n;
  }
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
