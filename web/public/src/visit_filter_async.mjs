import { visit_filter_recursive } from "./visit_filter_recursive.mjs";
export function visit_filter_async(node, children_get, filter, on_each) {
  visit_filter_recursive(node, children_get, filter, on_each, []);
}
