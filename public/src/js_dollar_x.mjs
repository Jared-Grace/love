import { list_next } from "../../../love/public/src/list_next.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { js_expand_generic } from "../../../love/public/src/js_expand_generic.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
export async function js_dollar_x({
  remaining,
  node,
  stack_,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  let l = list_is(stack_2);
  if (l) {
    let next = list_next(stack_2, stack_);
    let inserted = await js_expand_generic(next, stack_2, ast);
    list_remove(stack_2, stack_);
  }
  return;
}
