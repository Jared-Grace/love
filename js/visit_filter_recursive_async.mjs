import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { each_async } from "./each_async.mjs";
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
  let a = filter(node);
  if (not(a)) {
    return;
  }
  list_add(stack, node);
  let copy = list_copy(stack);
  await on_each({
    node,
    stack: copy,
  });
  let children = await children_get(node);
  async function lambda(c) {
    await visit_filter_recursive_async(c, children_get, filter, on_each, stack);
  }
  await each_async(children, lambda);
  let removed = list_pop(stack);
  if (not_equal(removed, node)) {
    error(
      "the walk keeps a stack of the nodes it is currently inside, and the one taken back off the top is not the one this step put there - something else added to or removed from that stack while the children were being visited",
    );
  }
}
