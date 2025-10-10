import { js_dollar_ien_generic } from "../../../love/public/src/js_dollar_ien_generic.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
export async function js_dollar_ine({
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
