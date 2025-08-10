import { visit_async } from "./visit_async.mjs";
export async function visit_unique_async(node, children_get, on_each) {
  await visit_async(node, children_get, on_each);
}
