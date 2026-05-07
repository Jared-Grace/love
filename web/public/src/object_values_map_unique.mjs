import { log } from "../../../love/public/src/log.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
export function object_values_map_unique(item, lambda) {
  let mapped = object_values_map(item, lambda);
  log(object_values_map_unique.name, {
    mapped,
  });
  let unique = list_unique(mapped);
  return unique;
}
