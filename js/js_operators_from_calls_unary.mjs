import { js_operators_from_calls_generic } from "./js_operators_from_calls_generic.mjs";
import { js_operator_call_to_node_unary } from "./js_operator_call_to_node_unary.mjs";
import { js_operators_unary } from "./js_operators_unary.mjs";
export function js_operators_from_calls_unary(ast) {
  "Turn every call standing for an operator written before one thing back into that operator. The twin beside this one does the same for the ones written between two things, and both walk the calls the same way.";
  let operators = js_operators_unary();
  js_operators_from_calls_generic(
    ast,
    operators,
    js_operator_call_to_node_unary,
  );
}
