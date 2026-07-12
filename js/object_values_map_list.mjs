import { object_values } from "./object_values.mjs";
import { object_values_map } from "./object_values_map.mjs";
export function object_values_map_list(item, lambda) {
  let mapped = object_values_map(item, lambda);
  let list = object_values(mapped);
  return list;
}
