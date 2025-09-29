import { js_dollar_ien_generic } from "../../../love/public/src/js_dollar_ien_generic.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
export async function js_dollar_ien({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  let fn = null_is;
  await js_dollar_ien_generic(stack1, fn, ast);
}
