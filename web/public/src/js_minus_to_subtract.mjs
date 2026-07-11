import { js_operator_to_call_binary } from "../../../love/public/src/js_operator_to_call_binary.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
export async function js_minus_to_subtract(ast) {
  let o = js_operator_minus();
  let r = await js_operator_to_call_binary(ast, o);
  return r;
}
