import { text_is_assert_multiple } from "../../../love/public/src/text_is_assert_multiple.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { js_code_text } from "../../../love/public/src/js_code_text.mjs";
export function js_call_object_property_get(property_name, object_name) {
  text_is_assert_multiple([property_name, object_name]);
  let code_string = js_code_text(property_name);
  let code = js_code_call_args(object_property_get.name, [
    object_name,
    code_string,
  ]);
  let parsed = js_parse_expression(code);
  return parsed;
}
