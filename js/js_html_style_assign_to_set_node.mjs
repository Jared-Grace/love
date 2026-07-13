import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_object_expression_property_single_try } from "./js_object_expression_property_single_try.mjs";
import { null_is } from "./null_is.mjs";
import { js_property_value_get } from "./js_property_value_get.mjs";
import { js_property_key_string_expression } from "./js_property_key_string_expression.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_copy } from "./object_copy.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { object_replace } from "./object_replace.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function js_html_style_assign_to_set_node(node) {
  let args = js_call_arguments_get(node);
  if (!list_size_2(args)) {
    return;
  }
  let b = list_first(args);
  let style = list_second(args);
  let property = js_object_expression_property_single_try(style);
  if (null_is(property)) {
    return;
  }
  let key_expression = js_property_key_string_expression(property);
  let value = js_property_value_get(property);
  let code = js_code_call(html_style_set.name);
  let expression = js_parse_expression(code);
  let arguments2 = js_call_arguments_get(expression);
  list_add_multiple(arguments2, [
    object_copy(b),
    key_expression,
    object_copy(value),
  ]);
  object_replace(node, expression);
}
