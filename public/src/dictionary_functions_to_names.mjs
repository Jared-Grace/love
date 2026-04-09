import { object_values_map_self } from "../../../love/public/src/object_values_map_self.mjs";
import { property_get_curried_right } from "../../../love/public/src/property_get_curried_right.mjs";
export function dictionary_functions_to_names(overrides) {
  let r = property_get_curried_right("name");
  object_values_map_self(overrides, r);
}
