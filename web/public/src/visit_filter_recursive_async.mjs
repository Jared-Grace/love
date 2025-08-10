import { each_async } from "./each_async.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_copy } from "./list_copy.mjs";
import { error } from "./error.mjs";
export async function visit_filter_recursive_async(
  node,
  children_get,
  filter,
  on_each,
  stack,
) {
  if (!filter(node)) {
    return;
  }
  list_add(stack, node);
  let copy = list_copy(stack);
  await on_each({
    node,
    stack: copy,
  });
  let children = await children_get(node);
  await each_async(children, async (c) => {
    await visit_filter_recursive_async(c, children_get, filter, on_each, stack);
  });
  let removed = list_pop(stack);
  if (removed !== node) {
    error();
  }
}
