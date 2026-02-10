import { each } from "../../../love/public/src/each.mjs";
import { object_property_from } from "../../../love/public/src/object_property_from.mjs";
export function properties_from(to, properties, from) {
  function lambda3(property) {
    object_property_from(to, property, from);
  }
  each(properties, lambda3);
  return to;
}
