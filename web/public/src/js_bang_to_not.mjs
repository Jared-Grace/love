import { js_operator_bang } from "../../../love/public/src/js_operator_bang.mjs";
import { js_operator_to_call_unary } from "../../../love/public/src/js_operator_to_call_unary.mjs";
export async function js_bang_to_not(ast) {
  let o = js_operator_bang();
  await js_operator_to_call_unary(ast, o);
  return;
}
