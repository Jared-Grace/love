import { list_add_if_not_includes } from "../../../love/public/src/list_add_if_not_includes.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { visit_async } from "../../../love/public/src/visit_async.mjs";
export async function visit_unique_async(node, children_get, on_each) {
  let found = [];
  async function lambda(node) {
    let children = await children_get(node);
    return list_difference(children, found);
  }
  async function lambda2(v) {
    let { node } = v;
    list_add_if_not_includes(found, node);
    await on_each(v);
  }
  await visit_async(node, lambda, lambda2);
}
