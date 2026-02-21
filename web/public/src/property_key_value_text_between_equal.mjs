import { text_between_equal } from "../../../love/public/src/text_between_equal.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_key_value_text_between_equal(item) {
  let key = property_get(item, "key");
  let value = property_get(item, "value");
  let combined2 = text_between_equal(key, value);
  return combined2;
}
