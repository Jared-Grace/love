import { each } from "../../../love/public/src/each.mjs";
import { property_delete } from "../../../love/public/src/property_delete.mjs";
export function property_delete_multiple(object, properties) {
  function lambda(item) {
    property_delete(object, item);
  }
  each(properties, lambda);
}
