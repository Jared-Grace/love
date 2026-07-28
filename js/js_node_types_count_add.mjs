import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function js_node_types_count_add(ast, counts) {
  arguments_assert(arguments, 2);
  ("Tallies which kinds of node a tree is actually made of. The question behind the");
  ("count is which kinds a transform can already build: a kind that appears often");
  ("and has no transform that produces it is a hole, and a kind that never appears");
  ("needs nothing.");
  function lambda(v) {
    let node = property_get(v, "node");
    let is = js_node_is(node);
    let n_is = not(is);
    if (n_is) {
      return;
    }
    let type = property_get(node, "type");
    property_count_add(counts, type, 1);
  }
  js_visit(ast, lambda);
}
