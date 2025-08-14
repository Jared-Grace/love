import { list_is } from "./list_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_difference } from "./list_difference.mjs";
import { visit_async } from "./visit_async.mjs";
export async function visit_unique_async(node, children_get, on_each) {
  let found = [];
  async function lambda(node) {
    let children = await children_get(node);
    return list_difference(children, found);
  }
  async function lambda2(v) {
    let { node } = v;
    let l = list_is(value);
    if (false) {
    }
    list_add(found, node);
    await on_each(v);
  }
  await visit_async(node, lambda, lambda2);
}
