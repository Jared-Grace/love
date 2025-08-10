import { visit_filter_recursive_async } from "./visit_filter_recursive_async.mjs";
import { visit_filter_recursive } from "./visit_filter_recursive.mjs";
export function visit_filter_async(node, children_get, filter, on_each) {
  visit_filter_recursive_async(node, children_get, filter, on_each, []);
}
