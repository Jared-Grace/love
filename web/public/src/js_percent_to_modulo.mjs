import { js_operator_to_call_binary } from "../../../love/public/src/js_operator_to_call_binary.mjs";
import { js_operator_percent } from "../../../love/public/src/js_operator_percent.mjs";
export async function js_percent_to_modulo(ast) {
  let o = js_operator_percent();
  let r = await js_operator_to_call_binary(ast, o);
  return r;
}
