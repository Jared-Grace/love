import { js_dollar_ien_generic } from "./js_dollar_ien_generic.mjs";
import { equal_not } from "./equal_not.mjs";
export function js_dollar_ine({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  let fn = equal_not;
  js_dollar_ien_generic(stack1, fn, ast);
}
