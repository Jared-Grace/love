import { list_all } from "../../../love/public/src/list_all.mjs";
import { string_starts_with_not } from "../../../love/public/src/string_starts_with_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_starts_with_not_multiple(mapped, prefixes) {
  marker("1");
  function lambda(item) {
    function lambda2(prefix) {
      let sw = string_starts_with_not(item, prefix);
      return sw;
    }
    let v = list_all(prefixes, lambda2);
    return v;
  }
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
