import { js_statement_if_test_set } from "./js_statement_if_test_set.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_stack_last } from "./js_stack_last.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
export async function marker_if_test_replace(replacement) {
  async function lambda(a) {
    let stack = property_get(a, "stack");
    let last = js_stack_last(stack, "IfStatement");
    let expression = js_parse_expression(replacement);
    js_statement_if_test_set(last, expression);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}
