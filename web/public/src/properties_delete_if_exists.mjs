import { property_delete_if_exists } from "../../../love/public/src/property_delete_if_exists.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function properties_delete_if_exists(data, properties) {
  function lambda2(p) {
    property_delete_if_exists(data, p);
  }
  each(properties, lambda2);
}
