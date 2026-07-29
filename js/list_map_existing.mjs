import { list_map } from "./list_map.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function list_map_existing(list, lambda$item, existing) {
  let mapped = list_map(list, lambda$item);
  list_add_multiple(existing, mapped);
}
