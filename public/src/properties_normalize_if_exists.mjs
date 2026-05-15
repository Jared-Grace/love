import { property_normalize_if_exists } from "../../../love/public/src/property_normalize_if_exists.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function properties_normalize_if_exists(object, properties) {
  function lambda() {
    property_normalize_if_exists(object2, property_name);
  }
  each(properties, lambda);
}
