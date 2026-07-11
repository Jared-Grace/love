import { js_operator_to_call_binary } from "../../../love/public/src/js_operator_to_call_binary.mjs";
import { js_operator_bang_equal } from "../../../love/public/src/js_operator_bang_equal.mjs";
export async function js_bang_equal_to_not_equal_loose(ast) {
  let o = js_operator_bang_equal();
  let r = await js_operator_to_call_binary(ast, o);
  return r;
}
