import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_copy } from "./list_copy.mjs";
export function visit_filter(node, children_get, filter, on_each, stack) {
  if (!filter(n)) {
    return;
  }
  list_add(stack, c);
  on_each({ node, stack });
  let children = children_get(node);
  each(children, (c) => {
    let copy = list_copy(stack);
    visit_filter(c, children_get, filter, on_each, copy);
  });
  removed = list_pop(stack);
}
