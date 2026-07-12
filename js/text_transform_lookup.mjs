import { text_transform } from "./text_transform.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
export function text_transform_lookup(s, lookup) {
  function lambda(c) {
    let exists = property_exists(lookup, c);
    if (exists) {
      let value = property_get(lookup, c);
      return value;
    }
    return c;
  }
  let t = text_transform(s, lambda);
  return t;
}
