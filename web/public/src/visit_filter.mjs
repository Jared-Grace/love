import { each } from "./each.mjs";
export function visit_filter(node, children_get, filter, on_each, stack) {
  if (!filter(n)) {
    return;
  }
  on_each(node);
  let children = children_get(node);
  each(children, (c) => {
    visit_filter(c, children_get, filter, on_each, stack);
  });
}
