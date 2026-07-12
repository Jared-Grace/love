import { visit_filter_recursive_async } from "./visit_filter_recursive_async.mjs";
export async function visit_filter_async(node, children_get, filter, on_each) {
  await visit_filter_recursive_async(node, children_get, filter, on_each, []);
}
