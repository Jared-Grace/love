import { object_values } from "../../../love/public/src/object_values.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
export function object_values_map_list(item, lambda) {
  let mapped = object_values_map(item, lambda);
  let v = object_values(mapped);
  return v;
}
