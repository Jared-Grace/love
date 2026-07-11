import { js_operator_to_call_binary } from "../../../love/public/src/js_operator_to_call_binary.mjs";
import { js_operator_asterisk } from "../../../love/public/src/js_operator_asterisk.mjs";
export async function js_asterisk_to_multiply(ast) {
  let o = js_operator_asterisk();
  let r = await js_operator_to_call_binary(ast, o);
  return r;
}
