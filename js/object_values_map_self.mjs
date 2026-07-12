import { each_object } from "./each_object.mjs";
import { property_set } from "./property_set.mjs";
export function object_values_map_self(object, lambda$value) {
  function lambda(value, property) {
    let value_new = lambda$value(value);
    property_set(object, property, value_new);
  }
  each_object(object, lambda);
}
