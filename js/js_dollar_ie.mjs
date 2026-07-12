import { js_dollar_if_call } from "./js_dollar_if_call.mjs";
import { equal } from "./equal.mjs";
export async function js_dollar_ie({ stack_1, ast }) {
  let fn = equal;
  await js_dollar_if_call(stack_1, fn, ast);
}
