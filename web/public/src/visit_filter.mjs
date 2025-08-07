import { visit } from "./visit.mjs";
export function visit_filter(node, children_get, filter, on_each) {
  if (!filter(n)) {
    return;
  }
  on_each(node);
  let children = children_get(node);
  each(children, (c) => visit(c, children_get, on_each));
}
