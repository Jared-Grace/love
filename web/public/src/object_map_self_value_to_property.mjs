import { object_values_map_self } from "../../../love/public/src/object_values_map_self.mjs";
export function object_map_self_value_to_property(property, lookup) {
  function lambda(value) {
    let r = {
      [property]: value,
    };
    return r;
  }
  object_values_map_self(lookup, lambda);
}
