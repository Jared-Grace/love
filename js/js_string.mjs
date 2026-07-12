import { text_is_assert } from "./text_is_assert.mjs";
import { property_delete } from "./property_delete.mjs";
import { property_set } from "./property_set.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_string(value_string) {
  text_is_assert(value_string);
  let s = js_parse_expression('""');
  property_set(s, "value", value_string);
  property_delete(s, "raw");
  return s;
}
