import { object_values } from "../../../love/public/src/object_values.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
export function object_values_map_unique(item, lambda) {
  let mapped = object_values_map(item, lambda);
  let v = object_values(o);
  let unique = list_unique(mapped);
  return unique;
}
