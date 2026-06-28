import { list_next_index } from "../../../love/public/src/list_next_index.mjs";
import { js_expand } from "../../../love/public/src/js_expand.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
export async function js_dollar_x({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  let l = list_is(stack2);
  if (l) {
    let index = list_next_index(stack2, stack1);
    let next = list_get(stack2, index);
    await js_expand(stack2, stack1, next, ast);
  }
}
