import { list_next } from "./list_next.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_expand_generic } from "./js_expand_generic.mjs";
import { list_is } from "./list_is.mjs";
export async function js_dollar_x({
  remaining,
  node,
  stack_1,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  let l = list_is(stack_2);
  if (l) {
    let next = list_next(stack_2, stack_1);
    let inserted = await js_expand_generic(next, stack_2, ast);
    list_remove(stack_2, stack_1);
  }
  return;
}
