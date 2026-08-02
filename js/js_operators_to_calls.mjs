import { js_page_serializing_call_is } from "./js_page_serializing_call_is.mjs";
import { js_operators_unary } from "./js_operators_unary.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
import { js_operators_to_calls_unary } from "./js_operators_to_calls_unary.mjs";
import { js_operators_to_calls_binary } from "./js_operators_to_calls_binary.mjs";
export async function js_operators_to_calls(ast) {
  "Rewrites the operators written in a file into calls to the functions that";
  "stand for them.";
  "A file that hands work to a browser is left alone entirely, the same question";
  "the built-in rewrite already asks and for the same reason. A function sent to a";
  "page is sent as text, so the import written for it here never arrives, and the";
  "comparison it was rewritten into lands there as a name nothing answers to.";
  "This half was the one still missing. The gate that watches for it named a proof";
  "reader borrowing the equality function, and repairing that file by hand and";
  "then canonicalizing it put the whole break straight back - so the repair could";
  "not hold and the prose beside it asking for no normalizing had nothing";
  "enforcing it.";
  let serializes = js_page_serializing_call_is(ast);
  if (serializes) {
    return;
  }
  let unary_operators = js_operators_unary();
  let binary_operators = js_operators_binary();
  await js_operators_to_calls_unary(ast, unary_operators);
  await js_operators_to_calls_binary(ast, binary_operators);
}
