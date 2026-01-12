import { marker } from "../../../love/public/src/marker.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
export function list_find_starts_with(list, prefix) {
  marker("1");
  function lambda2(item2) {
    let sw = string_starts_with(prefix, item2);
    return sw;
  }
  let any = list_find(list, lambda2);
  return any;
}
