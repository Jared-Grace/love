import { not } from "./not.mjs";
import { js_code_call_parse_expression } from "./js_code_call_parse_expression.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_object_expression_property_single_try } from "./js_object_expression_property_single_try.mjs";
import { null_is } from "./null_is.mjs";
import { js_property_value_get } from "./js_property_value_get.mjs";
import { js_property_key_string_expression } from "./js_property_key_string_expression.mjs";
import { object_copy } from "./object_copy.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_html_style_assign_to_set_node(node) {
  let args = js_call_arguments_get(node);
  let b2 = list_size_2(args);
  if (not(b2)) {
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
  let f_name = fn_name("html_style_set");
  let expression = js_code_call_parse_expression(f_name);
  let arguments2 = js_call_arguments_get(expression);
  let copy = object_copy(b);
  let copy2 = object_copy(value);
  list_add_multiple(arguments2, [copy, key_expression, copy2]);
  object_replace(node, expression);
}
