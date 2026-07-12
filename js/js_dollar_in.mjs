import { js_dollar_if_call } from "./js_dollar_if_call.mjs";
import { not } from "./not.mjs";
export async function js_dollar_in({
  remaining,
  node,
  stack_1,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  let fn = not;
  await js_dollar_if_call(stack_1, fn, ast);
  return;
}
