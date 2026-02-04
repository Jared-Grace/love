import { list_map } from "../../../love/public/src/list_map.mjs";
import { string_replace } from "../../../love/public/src/string_replace.mjs";
export function list_map_replace(mapped, from, to) {
  function lambda(item) {
    let replaced = string_replace(item, from, to);
    return replaced;
  }
  let mapped2 = list_map(mapped, lambda);
  return mapped2;
}
