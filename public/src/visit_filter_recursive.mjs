import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_pop } from "../../../love/public/src/list_pop.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { error } from "../../../love/public/src/error.mjs";
export function visit_filter_recursive(
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
  let children = children_get(node);
  each(children, (c) => {
    visit_filter_recursive(c, children_get, filter, on_each, stack);
  });
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
