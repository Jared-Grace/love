import { js_operators_to_calls_unary } from "./js_operators_to_calls_unary.mjs";
import { js_operators_to_calls_binary } from "./js_operators_to_calls_binary.mjs";
import { js_operators_unary } from "./js_operators_unary.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
export async function js_operators_to_calls(ast) {
  let unary_operators = js_operators_unary();
  let binary_operators = js_operators_binary();
  await js_operators_to_calls_unary(ast, unary_operators);
  await js_operators_to_calls_binary(ast, binary_operators);
}
