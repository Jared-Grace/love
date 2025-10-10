import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
export function object_properties_delete_all(obj) {
  marker("1");
  function lambda(p) {
    let v = object_property_delete(obj, p);
    return v;
  }
  let list = object_properties(obj);
  each(list, lambda);
}
