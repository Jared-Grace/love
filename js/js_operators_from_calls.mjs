import { arguments_assert } from "./arguments_assert.mjs";
import { js_operators_from_calls_generic } from "./js_operators_from_calls_generic.mjs";
import { js_operator_minus } from "./js_operator_minus.mjs";
import { js_operator_asterisk } from "./js_operator_asterisk.mjs";
import { js_operator_division } from "./js_operator_division.mjs";
import { js_operator_percent } from "./js_operator_percent.mjs";
import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
export function js_operators_from_calls(ast) {
  // Denormalize compile step (inverse of js_operators_to_calls): fold the arithmetic operator-fn calls
  // back to operators for readable output. Reuses the SAME operator descriptors as the forward pass, so
  // the round-trip is exact. Arithmetic subset for the prototype (subtract/multiply/division/modulo/pow);
  // `+`/add is intentionally excluded both ways (ambiguous with string concat).
  arguments_assert(arguments, 1);
  let operators = [
    js_operator_minus(),
    js_operator_asterisk(),
    js_operator_division(),
    js_operator_percent(),
    js_operator_double_asterisk(),
  ];
  js_operators_from_calls_generic(ast, operators);
  return;
}
