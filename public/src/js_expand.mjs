import { log } from "../../../love/public/src/log.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { js_expand_generic } from "../../../love/public/src/js_expand_generic.mjs";
export async function js_expand(stack2, stack1, next, ast) {
  log(js_expand.name, {
    stack2,
    stack1,
    next,
  });
  let inserted = await js_expand_generic(next, stack2, index, ast);
  list_remove(stack2, stack1);
  return index;
}
