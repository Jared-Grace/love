import { js_dollar_ien_generic } from "../../../love/public/src/js_dollar_ien_generic.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
export async function js_dollar_ine({
  remaining,
  node,
  stack_1,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  let fn = equal_not;
  await js_dollar_ien_generic(stack_1, fn, ast);
}
