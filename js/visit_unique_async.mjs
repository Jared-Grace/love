import { property_exists_not } from "./property_exists_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { visit_async } from "./visit_async.mjs";
export async function visit_unique_async(node, children_get, on_each) {
  "Walks a graph outward from one node, never following the same node twice";
  "Whether a node has been met already is asked of a record kept by name, not searched for in a list. The question is asked once for every edge, and the list grows to the size of the graph, so a walk over a few thousand nodes spends millions of comparisons deciding what it has already seen - and a sweep starting from two hundred roots pays the whole of that again for every root.";
  let seen = {};
  async function lambda(node_visiting) {
    let children = await children_get(node_visiting);
    function unseen_is(child) {
      let b = property_exists_not(seen, child);
      return b;
    }
    let fresh = list_filter(children, unseen_is);
    return fresh;
  }
  async function lambda2(v) {
    let node_visited = property_get(v, "node");
    property_set(seen, node_visited, true);
    await on_each(v);
  }
  await visit_async(node, lambda, lambda2);
}
