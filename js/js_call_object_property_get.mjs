import { text_is_assert_multiple } from "./text_is_assert_multiple.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_string } from "./js_code_string.mjs";
export function js_call_object_property_get(property_name, object_name) {
  text_is_assert_multiple([property_name, object_name]);
  let code_string = js_code_string(property_name);
  let code = js_code_call_args(property_get.name, [object_name, code_string]);
  let parsed = js_parse_expression(code);
  return parsed;
}
