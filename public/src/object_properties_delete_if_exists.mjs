import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
export function object_properties_delete_if_exists(data, properties) {
  marker("1");
  function lambda2(p) {
    let exists = object_property_exists(object, property_name);
    object_property_delete(data, p);
  }
  each(properties, lambda2);
}
