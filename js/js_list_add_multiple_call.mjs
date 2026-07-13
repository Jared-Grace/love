import { js_code_call } from "./js_code_call.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_code_brackets_empty } from "./js_code_brackets_empty.mjs";
import { js_array_expression_elements } from "./js_array_expression_elements.mjs";
export function js_list_add_multiple_call(list_node, values) {
  let code = js_code_call(list_add_multiple.name);
  let call = js_parse_expression(code);
  let args = js_call_arguments_get(call);
  let brackets = js_code_brackets_empty();
  let array = js_parse_expression(brackets);
  let elements = js_array_expression_elements(array);
  list_add_multiple(elements, values);
  let list_and_array = [list_node, array];
  list_add_multiple(args, list_and_array);
  return call;
}
