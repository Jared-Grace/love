import { equal_not } from "./equal_not.mjs";
import { js_dollar_ien_generic } from "./js_dollar_ien_generic.mjs";
export async function js_dollar_ien({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  let fn = equal_not;
  await js_dollar_ien_generic(stack1, fn, ast);
}
