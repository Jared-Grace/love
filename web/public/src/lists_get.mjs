import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
export function lists_get(lists, index) {
  function lambda(list) {
    let item = list_get(list, index);
    return item;
  }
  const items = list_map(lists, lambda);
  return items;
}
