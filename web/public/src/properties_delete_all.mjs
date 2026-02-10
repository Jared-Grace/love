import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
export function properties_delete_all(obj) {
  function lambda(p) {
    let v = object_property_delete(obj, p);
    return v;
  }
  let list = properties_get(obj);
  each(list, lambda);
}
