import { js_operators_unary } from "./js_operators_unary.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
import { js_operators_to_fn_name } from "./js_operators_to_fn_name.mjs";
import { list_concat } from "./list_concat.mjs";
export function js_operator_target_names() {
  "The name of every function an operator is turned into, both spellings of operator together.";
  "Read from the same two lists the fold itself works from, so an operator added there is asked about here without anybody remembering to.";
  let unary = js_operators_unary();
  let binary = js_operators_binary();
  let operators = list_concat(unary, binary);
  let names = js_operators_to_fn_name(operators);
  names.push("equal_not");
  return names;
}
