import { object_property_delete_if_exists } from "../../../love/public/src/object_property_delete_if_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function object_properties_delete_if_exists(data, properties) {
  function lambda2(p) {
    object_property_delete_if_exists(data, p);
  }
  each(properties, lambda2);
}
