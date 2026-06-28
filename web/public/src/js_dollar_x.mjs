import { js_expand } from "../../../love/public/src/js_expand.mjs";
export async function js_dollar_x({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  await js_expand(stack2, stack1, ast);
}
