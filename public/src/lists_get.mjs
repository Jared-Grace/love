import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
export function lists_get(lists, index) {
  const items = list_map(lists, (list) => list_get(list, index));
  return items;
}
