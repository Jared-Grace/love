import { list_map } from "./list_map.mjs";
import { text_replace } from "./text_replace.mjs";
export function list_map_replace(list, from, to) {
  function lambda(item) {
    let replaced = text_replace(item, from, to);
    return replaced;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
