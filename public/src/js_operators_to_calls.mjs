import { js_operators_to_calls_unary } from "../../../love/public/src/js_operators_to_calls_unary.mjs";
import { js_operators_to_calls_binary } from "../../../love/public/src/js_operators_to_calls_binary.mjs";
import { js_operator_bang } from "../../../love/public/src/js_operator_bang.mjs";
import { js_operator_triple_equal } from "../../../love/public/src/js_operator_triple_equal.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { js_operator_asterisk } from "../../../love/public/src/js_operator_asterisk.mjs";
import { js_operator_division } from "../../../love/public/src/js_operator_division.mjs";
import { js_operator_percent } from "../../../love/public/src/js_operator_percent.mjs";
import { js_operator_double_asterisk } from "../../../love/public/src/js_operator_double_asterisk.mjs";
import { js_operator_less_than } from "../../../love/public/src/js_operator_less_than.mjs";
import { js_operator_greater_than } from "../../../love/public/src/js_operator_greater_than.mjs";
import { js_operator_less_than_equal } from "../../../love/public/src/js_operator_less_than_equal.mjs";
import { js_operator_greater_than_equal } from "../../../love/public/src/js_operator_greater_than_equal.mjs";
import { js_operator_double_equal } from "../../../love/public/src/js_operator_double_equal.mjs";
import { js_operator_bang_equal } from "../../../love/public/src/js_operator_bang_equal.mjs";
import { js_operator_bang_double_equal } from "../../../love/public/src/js_operator_bang_double_equal.mjs";
export async function js_operators_to_calls(ast) {
  let unary_operators = [js_operator_bang()];
  let binary_operators = [
    js_operator_triple_equal(),
    js_operator_minus(),
    js_operator_asterisk(),
    js_operator_division(),
    js_operator_percent(),
    js_operator_double_asterisk(),
    js_operator_less_than(),
    js_operator_greater_than(),
    js_operator_less_than_equal(),
    js_operator_greater_than_equal(),
    js_operator_double_equal(),
    js_operator_bang_equal(),
    js_operator_bang_double_equal(),
  ];
  await js_operators_to_calls_unary(ast, unary_operators);
  await js_operators_to_calls_binary(ast, binary_operators);
  return;
}
