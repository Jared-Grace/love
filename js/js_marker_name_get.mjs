import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { property_get } from "./property_get.mjs";
import { assert_message } from "./assert_message.mjs";
import { not } from "./not.mjs";
import { list_is } from "./list_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { marker } from "./marker.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_marker_name_get(v) {
  let stack = property_get(v, "stack");
  let stack_1 = list_get_end(stack, 1);
  let a = js_node_is(stack_1);
  if (not(a)) {
    return null;
  }
  let a2 = js_node_type_is(stack_1, "ExpressionStatement");
  if (not(a2)) {
    return null;
  }
  let node = property_get(v, "node");
  let callee = property_get(node, "callee");
  let a3 = js_node_type_is(callee, "Identifier");
  if (not(a3)) {
    return null;
  }
  let name = property_get(callee, "name");
  if (name !== marker.name) {
    return null;
  }
  let arguments2 = js_call_arguments_get(node);
  if (list_empty_is(arguments2)) {
    return null;
  }
  let a_first = list_first(arguments2);
  let a4 = js_node_type_is(a_first, "Literal");
  if (not(a4)) {
    return null;
  }
  let stack_2 = list_get_end(stack, 2);
  let a5 = list_is(stack_2);
  assert_message(a5, "The marker's grandparent in the stack was expected to be a list. Would you like to check the AST stack?");
  let value = property_get(a_first, "value");
  return value;
}
