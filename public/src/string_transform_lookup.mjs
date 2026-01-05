import { marker } from "../../../love/public/src/marker.mjs";
import { string_transform } from "../../../love/public/src/string_transform.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export function string_transform_lookup(s, lookup) {
  marker("1");
  function lambda3(c) {
    let exists = object_property_exists(lookup, c);
    if (exists) {
      let value = object_property_get(lookup, c);
      return value;
    }
    return c;
  }
  let t = string_transform(s, lambda3);
  return t;
}
