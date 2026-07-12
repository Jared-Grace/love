import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_copy } from "./list_copy.mjs";
import { error } from "./error.mjs";
export function visit_filter_recursive(
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
  let children = children_get(node);
  function visit_filter_recursive_each_child(c) {
    visit_filter_recursive(c, children_get, filter, on_each, stack);
  }
  each(children, visit_filter_recursive_each_child);
  let copy = list_copy(stack);
  on_each({
    node,
    stack: copy,
  });
  let removed = list_pop(stack);
  if (removed !== node) {
    error();
  }
}
