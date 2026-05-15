import { property_normalize_if_exists } from "../../../love/public/src/property_normalize_if_exists.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function properties_normalize_if_exists(object, properties) {
  function lambda(property) {
    property_normalize_if_exists(object, property);
  }
  each(properties, lambda);
}
