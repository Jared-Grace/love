import { list_all } from "./list_all.mjs";
import { string_starts_with_not } from "./string_starts_with_not.mjs";
import { marker } from "./marker.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with_not_multiple(mapped, prefixes) {
  marker("1");
  function lambda(item) {
    function lambda2(prefix) {
      let sw = string_starts_with_not(item, book_code);
      return sw;
    }
    let v = list_all(prefixes, lambda2);
    return v;
  }
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
