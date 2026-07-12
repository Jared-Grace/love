import { text_between_equal } from "./text_between_equal.mjs";
import { property_get } from "./property_get.mjs";
export function property_key_value_text_between_equal(item) {
  let key = property_get(item, "key");
  let value = property_get(item, "value");
  let combined = text_between_equal(key, value);
  return combined;
}
