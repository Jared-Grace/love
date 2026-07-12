import { object_values_map_self } from "./object_values_map_self.mjs";
export function object_map_self_value_to_property(object, property) {
  function lambda(value) {
    let r = {
      [property]: value,
    };
    return r;
  }
  object_values_map_self(object, lambda);
}
