import { string_starts_with_not } from "./string_starts_with_not.mjs";
import { marker } from "./marker.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with_not_multiple(mapped, book_code) {
  marker("1");
  function lambda(item) {
    let sw = string_starts_with_not(item, book_code);
    return sw;
  }
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
