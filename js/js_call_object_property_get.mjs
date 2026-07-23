import { js_call_args_from_code } from "./js_call_args_from_code.mjs";
import { text_is_assert_multiple_json } from "./text_is_assert_multiple_json.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_string } from "./js_code_string.mjs";
export function js_call_object_property_get(property_name, object_name) {
  text_is_assert_multiple_json([property_name, object_name], {
    hint: "the property and object names should both be text",
  });
  let code_string = js_code_string(property_name);
  let parsed = js_call_args_from_code(property_get.name, [
    object_name,
    code_string,
  ]);
  return parsed;
}
