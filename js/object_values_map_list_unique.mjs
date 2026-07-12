import { object_values_map_list } from "./object_values_map_list.mjs";
import { list_unique } from "./list_unique.mjs";
export function object_values_map_list_unique(item, lambda) {
  let v = object_values_map_list(item, lambda);
  let unique = list_unique(v);
  return unique;
}
