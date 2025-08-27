import { list_get } from "./list_get.mjs";
import { list_next_index } from "./list_next_index.mjs";
import { list_is } from "./list_is.mjs";
import { js_expand_generic } from "./js_expand_generic.mjs";
import { marker } from "./marker.mjs";
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
  return;
  let l = list_is(stack2);
  if (l) {
    let index = list_next_index(stack2, stack1);
    let item = list_get(list, index2);
    let inserted = await js_expand_generic(next, stack2, index);
  }
}
