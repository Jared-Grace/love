import { js_operator_to_call_binary } from "../../../love/public/src/js_operator_to_call_binary.mjs";
import { js_operator_greater_than_equal } from "../../../love/public/src/js_operator_greater_than_equal.mjs";
export async function js_greater_than_equal_to_call(ast) {
  let o = js_operator_greater_than_equal();
  let r = await js_operator_to_call_binary(ast, o);
  return r;
}
