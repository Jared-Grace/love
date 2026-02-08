import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_replace } from "../../../love/public/src/text_replace.mjs";
export function list_map_replace(list, from, to) {
  function lambda(item) {
    let replaced = text_replace(item, from, to);
    return replaced;
  }
  let mapped2 = list_map(list, lambda);
  return mapped2;
}
