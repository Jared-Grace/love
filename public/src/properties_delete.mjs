import { each } from "../../../love/public/src/each.mjs";
import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
export function properties_delete(data, properties) {
  function lambda2(p) {
    object_property_delete(data, p);
  }
  each(properties, lambda2);
}
