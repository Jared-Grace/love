import { string_ends_with_not } from "./string_ends_with_not.mjs";
import { marker } from "./marker.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_any } from "./list_any.mjs";
export function list_filter_ends_with_not_any(suffixes, list) {
  marker("1");
  function lambda(item) {
    function lambda3(suffix) {
      let ewn = string_ends_with_not(item, suffix);
      return ewn;
    }
    let any = list_any(suffixes, lambda3);
    return any;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
