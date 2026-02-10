import { each } from "../../../love/public/src/each.mjs";
import { property_delete } from "../../../love/public/src/property_delete.mjs";
export function property_delete_multiple(o, list) {
  function lambda(item) {
    property_delete(o, item);
  }
  each(list, lambda);
}
