import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_operator_call_to_node } from "./js_operator_call_to_node.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
export function js_operators_from_calls_generic(ast, operators) {
  arguments_assert(arguments, 2);
  "Visit every call; if its callee names an operator fn, rewrite the call back into that operator's";
  "binary expression. Matching by fn name (not alias) mirrors the forward pass matching by operator";
  "symbol. Live descent means nested calls denormalize fully as replaced operand subtrees are visited.";
  function lambda(node) {
    let callee_name = js_call_callee_name_try(node);
    function matches_operator(o) {
      let fn = property_get(o, "fn");
      let is = equal(fn.name, callee_name);
      return is;
    }
    let matches = list_filter(operators, matches_operator);
    function apply(o) {
      js_operator_call_to_node(node, o);
    }
    each(matches, apply);
  }
  js_visit_type_node(ast, "CallExpression", lambda);
  return;
}
