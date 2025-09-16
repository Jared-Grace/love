import { marker } from "./marker.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_find } from "./list_find.mjs";
export function list_find_starts_with(item, prefixes) {
  marker("1");
  function lambda2(item2) {
    let sw = string_starts_with(item, item2);
    return sw;
  }
  let any = list_find(prefixes, lambda2);
  return any;
}
