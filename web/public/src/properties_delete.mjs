import { each } from "../../../love/public/src/each.mjs";
import { property_delete } from "../../../love/public/src/property_delete.mjs";
export function properties_delete(object, properties) {
  function lambda2(property) {
    property_delete(object, property);
  }
  each(properties, lambda2);
}
