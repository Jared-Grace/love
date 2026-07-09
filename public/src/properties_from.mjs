import { each } from "../../../love/public/src/each.mjs";
import { property_from } from "../../../love/public/src/property_from.mjs";
export function properties_from(to, properties, from) {
  function lambda(property) {
    property_from(to, property, from);
  }
  each(properties, lambda);
  return to;
}
