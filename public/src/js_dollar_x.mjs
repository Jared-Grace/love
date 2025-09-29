import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_next_index } from "../../../love/public/src/list_next_index.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { js_expand_generic } from "../../../love/public/src/js_expand_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function js_dollar_x({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  marker("1");
  let l = list_is(stack2);
  if (l) {
    let index = list_next_index(stack2, stack1);
    let next = list_get(stack2, index);
    let inserted = await js_expand_generic(next, stack2, index, ast);
    list_remove(stack2, stack1);
  }
}
