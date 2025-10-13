import { each } from "../../../love/public/src/each.mjs";
import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
export function object_property_delete_multiple(o, list) {
  function lambda(item) {
    object_property_delete(o, item);
  }
  each(list, lambda);
}
