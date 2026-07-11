import { js_dollar_if_call } from "../../../love/public/src/js_dollar_if_call.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export async function js_dollar_ie({ stack_1, ast }) {
  let fn = equal;
  await js_dollar_if_call(stack_1, fn, ast);
}
