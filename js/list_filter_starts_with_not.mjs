import { string_starts_with_not } from "../../../love/public/src/string_starts_with_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_starts_with_not(mapped, prefix) {
  marker("1");
  function lambda(item) {
    let sw = string_starts_with_not(item, prefix);
    return sw;
  }
  let filtered = list_filter(mapped, lambda);
  return filtered;
}
