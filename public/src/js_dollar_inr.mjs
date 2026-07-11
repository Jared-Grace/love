import { js_dollar_if_add_return } from "../../../love/public/src/js_dollar_if_add_return.mjs";
import { js_dollar_in } from "../../../love/public/src/js_dollar_in.mjs";
export async function js_dollar_inr({
  remaining,
  node,
  stack_,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  await js_dollar_in({
    remaining,
    node,
    stack_,
    stack_2,
    stack_3,
    ast,
    afters,
  });
  js_dollar_if_add_return(stack_);
  return;
}
