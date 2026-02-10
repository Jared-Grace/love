import { text_transform } from "../../../love/public/src/text_transform.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function text_transform_lookup(s, lookup) {
  function lambda3(c) {
    let exists = property_exists(lookup, c);
    if (exists) {
      let value = object_property_get(lookup, c);
      return value;
    }
    return c;
  }
  let t = text_transform(s, lambda3);
  return t;
}
