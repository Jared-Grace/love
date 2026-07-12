import { text_remove } from "./text_remove.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_remove(list, from) {
  function lambda(item) {
    let replaced = text_remove(item, from);
    return replaced;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
