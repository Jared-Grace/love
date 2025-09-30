import { log } from "../../../love/public/src/log.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_pop } from "../../../love/public/src/list_pop.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { error } from "../../../love/public/src/error.mjs";
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
  log(message);
  async function lambda(c) {
    await visit_filter_recursive_async(c, children_get, filter, on_each, stack);
  }
  await each_async(children, lambda);
  let removed = list_pop(stack);
  if (removed !== node) {
    error();
  }
}
