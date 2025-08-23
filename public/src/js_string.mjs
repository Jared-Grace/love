import { object_property_delete } from "./object_property_delete.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_string(value_string) {
  let s = js_parse_expression('""');
  object_property_set(s, "value", value_string);
  object_property_delete(s, "raw");
  return s;
}
