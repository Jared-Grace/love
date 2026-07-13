import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_single } from "./list_single.mjs";
import { js_property_value_get } from "./js_property_value_get.mjs";
import { js_property_key_string_expression } from "./js_property_key_string_expression.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_copy } from "./object_copy.mjs";
import { list_add } from "./list_add.mjs";
import { object_replace } from "./object_replace.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function js_html_style_assign_to_set_node(node) {
  let args = js_call_arguments_get(node);
  if (!list_size_2(args)) {
    return;
  }
  let b = list_first(args);
  let style = list_second(args);
  if (js_node_type_not_is(style, "ObjectExpression")) {
    return;
  }
  let properties = js_object_expression_properties(style);
  if (!list_size_1(properties)) {
    return;
  }
  let property = list_single(properties);
  if (js_node_type_not_is(property, "Property")) {
    return;
  }
  let key_expression = js_property_key_string_expression(property);
  let value = js_property_value_get(property);
  let code = js_code_call(html_style_set.name);
  let expression = js_parse_expression(code);
  let arguments2 = js_call_arguments_get(expression);
  list_add(arguments2, object_copy(b));
  list_add(arguments2, key_expression);
  list_add(arguments2, object_copy(value));
  object_replace(node, expression);
}
