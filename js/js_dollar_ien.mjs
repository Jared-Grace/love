import { js_dollar_ien_generic } from "./js_dollar_ien_generic.mjs";
import { null_is } from "./null_is.mjs";
export async function js_dollar_ien({
  remaining,
  node,
  stack_1,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  let fn = null_is;
  await js_dollar_ien_generic(stack_1, fn, ast);
}
