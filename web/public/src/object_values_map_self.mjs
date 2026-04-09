import { each_object } from "../../../love/public/src/each_object.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export function object_values_map_self(overrides, r) {
  function lambda(value, property) {
    let value_new = r(value);
    property_set(overrides, property, value_new);
  }
  each_object(overrides, lambda);
}
