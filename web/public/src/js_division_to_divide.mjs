import { js_operator_to_call_binary } from "../../../love/public/src/js_operator_to_call_binary.mjs";
import { js_operator_division } from "../../../love/public/src/js_operator_division.mjs";
export async function js_division_to_divide(ast) {
  let o = js_operator_division();
  let r = await js_operator_to_call_binary(ast, o);
  return r;
}
