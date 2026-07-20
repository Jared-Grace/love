import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_operator_call_to_node } from "./js_operator_call_to_node.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
export function js_operators_from_calls_generic(ast, operators) {
  // Visit every CallExpression; if its callee names an operator fn (o.fn.name), rewrite the call back
  // into that operator's BinaryExpression. Matching by fn.name (not alias) mirrors the forward pass's
  // match-by-operator-symbol. Live descent means nested calls (subtract(multiply(a,b),c)) denormalize
  // fully — the replaced node's new operand subtrees are visited in turn.
  arguments_assert(arguments, 2);
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
