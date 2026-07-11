import { js_operator_to_call_binary } from "../../../love/public/src/js_operator_to_call_binary.mjs";
import { js_operator_bang_double_equal } from "../../../love/public/src/js_operator_bang_double_equal.mjs";
export async function js_bang_double_equal_to_not_equal(ast) {
  let o = js_operator_bang_double_equal();
  let r = await js_operator_to_call_binary(ast, o);
  return r;
}
