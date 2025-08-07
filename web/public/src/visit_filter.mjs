import { visit } from "./visit.mjs";
export function visit_filter(node, children_get, filter, on_each) {
  visit(node, children_get, (n) => {
    if (filter(n)) {
      on_each(n);
    }
  });
}
