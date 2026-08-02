import { js_operator_call_to_node } from "./js_operator_call_to_node.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operators_from_calls_generic } from "./js_operators_from_calls_generic.mjs";
export function js_operators_from_calls(ast) {
  arguments_assert(arguments, 1);
  ("Denormalize compile step: the inverse of the operators-to-calls forward pass. Fold arithmetic");
  ("operator-fn calls back to operators for readable output, reusing the same operator descriptors so");
  ("the round-trip is exact. It reads the very list the forward pass works from, so the two cover the");
  ("same ground without anybody keeping them level by hand - it used to name five arithmetic ones here");
  ("and silently left every comparison folded. Plus is absent from that list already, excluded both");
  ("ways since it is ambiguous with joining words.");
  ("Written between the two things it acts on, only. The one written before its single operand still");
  ("needs a shape of its own to be rebuilt into.");
  let operators = js_operators_binary();
  js_operators_from_calls_generic(ast, operators, js_operator_call_to_node);
}
