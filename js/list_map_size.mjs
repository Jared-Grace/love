import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_size(lists) {
  let mapped = list_map(lists, list_size);
  return mapped;
}
