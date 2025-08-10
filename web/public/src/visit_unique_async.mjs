import { list_add } from "./list_add.mjs";
import { list_difference } from "./list_difference.mjs";
import { visit_async } from "./visit_async.mjs";
export async function visit_unique_async(node, children_get, on_each) {
  let found = [];
  await visit_async(
    node,
    async (node) => {
      let children = await children_get(node);
      return list_difference(children, found);
    },
    async (v) => {
      let { node } = v;
      list_add(found, node);
      await on_each(v);
    },
  );
}
