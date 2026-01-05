import { marker } from "../../../love/public/src/marker.mjs";
import { string_transform } from "../../../love/public/src/string_transform.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export function string_transform_lookup(normalize, lower) {
  marker("1");
  function lambda3(c) {
    let exists = object_property_exists(normalize, c);
    if (exists) {
      let value = object_property_get(normalize, c);
      return value;
    }
    return c;
  }
  let joined2 = string_transform(lower, lambda3);
}
