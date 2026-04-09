import { property_set } from "../../../love/public/src/property_set.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { property_get_curried_right } from "../../../love/public/src/property_get_curried_right.mjs";
export function dictionary_functions_to_names(overrides_fns) {
  let r = property_get_curried_right("name");
  let overrides = object_values_map(overrides_fns, r);
  function lambda(value, property) {
    property_set(object2, property_name, value2);
  }
  each_object(object, lambda);
  return overrides;
}
