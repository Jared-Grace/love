import { each } from "../../../love/public/src/each.mjs";
import { property_delete } from "../../../love/public/src/property_delete.mjs";
export function properties_delete(data, properties) {
  function lambda2(p) {
    property_delete(data, p);
  }
  each(properties, lambda2);
}
