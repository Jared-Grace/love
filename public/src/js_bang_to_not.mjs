import { js_operator_to_call_unary } from "../../../love/public/src/js_operator_to_call_unary.mjs";
import { not } from "../../../love/public/src/not.mjs";
export async function js_bang_to_not(ast) {
  let operator = "!";
  let fn = not;
  let o = {
    fn,
    operator,
  };
  await js_operator_to_call_unary(ast, o);
  return;
}
