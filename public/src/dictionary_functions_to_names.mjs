import { object_values_map_self } from "../../../love/public/src/object_values_map_self.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { property_get_curried_right } from "../../../love/public/src/property_get_curried_right.mjs";
export function dictionary_functions_to_names(overrides_fns) {
  let r = property_get_curried_right("name");
  let overrides = object_values_map(overrides_fns, r);
  object_values_map_self(r, overrides);
  return overrides;
}
