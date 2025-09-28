import { each } from "./each.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
export function object_properties_delete(data, properties) {
  function lambda2(p) {
    object_property_delete(data, p);
  }
  each(properties, lambda2);
}
