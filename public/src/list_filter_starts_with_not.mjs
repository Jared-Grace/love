import { not } from "./not.mjs";
import { marker } from "./marker.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export function list_filter_starts_with_not(mapped, book_code) {
  marker("1");
  function lambda(item) {
    let a = string_starts_with(item, book_code);
    let sw = not(a);
    return sw;
  }
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
