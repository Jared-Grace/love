import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { object_copy } from "./object_copy.mjs";
import { object_replace } from "./object_replace.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_get } from "./list_get.mjs";
export function js_operator_call_to_node(node, o) {
  // Denormalize (inverse of js_operator_node_to_call): rewrite a 2-arg call to operator fn `o.fn`
  // (e.g. subtract(a, b)) back into a BinaryExpression with `o.operator` (a - b), in place. Parse a
  // throwaway binary template to get a genuine BinaryExpression node, then overwrite its operator and
  // its two operands with copies of the call's arguments. The unparser re-adds parens by precedence.
  arguments_assert(arguments, 2);
  let operator = property_get(o, "operator");
  let call_arguments = js_call_arguments_get(node);
  let left = object_copy(list_get(call_arguments, 0));
  let right = object_copy(list_get(call_arguments, 1));
  let expression = js_parse_expression("a * b");
  property_set(expression, "operator", operator);
  property_set(expression, "left", left);
  property_set(expression, "right", right);
  object_replace(node, expression);
  return;
}
