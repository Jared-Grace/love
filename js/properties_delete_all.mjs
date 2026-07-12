import { property_delete } from "./property_delete.mjs";
import { each } from "./each.mjs";
import { properties_get } from "./properties_get.mjs";
export function properties_delete_all(obj) {
  function lambda(p) {
    let v = property_delete(obj, p);
    return v;
  }
  let list = properties_get(obj);
  each(list, lambda);
}
