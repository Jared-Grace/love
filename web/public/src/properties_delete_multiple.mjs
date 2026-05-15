import { each } from "../../../love/public/src/each.mjs";
import { properties_delete } from "../../../love/public/src/properties_delete.mjs";
export function properties_delete_multiple(properties, list) {
  function lambda(object) {
    properties_delete(object, properties);
  }
  each(list, lambda);
}
