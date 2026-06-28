import { log } from "../../../love/public/src/log.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { js_expand_generic } from "../../../love/public/src/js_expand_generic.mjs";
import { list_next_index } from "../../../love/public/src/list_next_index.mjs";
export async function js_expand(stack2, stack1, next, ast) {
  let index = list_next_index(stack2, stack1);
  let inserted = await js_expand_generic(next, stack2, index, ast);
  list_remove(stack2, stack1);
  return index;
  log(js_expand.name, {
    stack2,
    stack1,
    next,
  });
}
