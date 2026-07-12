import { each } from "./each.mjs";
import { property_from } from "./property_from.mjs";
export function properties_from(to, properties, from) {
  function lambda(property) {
    property_from(to, property, from);
  }
  each(properties, lambda);
  return to;
}
