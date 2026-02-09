import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
export function js_text(value_string) {
  let s = js_parse_expression('""');
  object_property_set(s, "value", value_string);
  object_property_delete(s, "raw");
  return s;
}
