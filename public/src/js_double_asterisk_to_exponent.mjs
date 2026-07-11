import { js_operator_to_call_binary } from "../../../love/public/src/js_operator_to_call_binary.mjs";
import { js_operator_double_asterisk } from "../../../love/public/src/js_operator_double_asterisk.mjs";
export async function js_double_asterisk_to_exponent(ast) {
  let o = js_operator_double_asterisk();
  let r = await js_operator_to_call_binary(ast, o);
  return r;
}
