import { object_property_delete } from "./object_property_delete.mjs";
import { each } from "./each.mjs";
import { object_properties } from "./object_properties.mjs";
export function object_properties_delete(obj) {
  function lambda(p) {
    let v = object_property_delete(obj, p);
    return v;
  }
  let list = object_properties(obj);
  each(list, lambda);
}
