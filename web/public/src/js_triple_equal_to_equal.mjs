import { js_operator_to_call_binary } from "../../../love/public/src/js_operator_to_call_binary.mjs";
import { js_operator_triple_equal } from "../../../love/public/src/js_operator_triple_equal.mjs";
export async function js_triple_equal_to_equal(ast) {
  let o = js_operator_triple_equal();
  let r = await js_operator_to_call_binary(ast, o);
  return r;
}
