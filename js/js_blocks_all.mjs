import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { list_add } from "./list_add.mjs";
export function js_blocks_all(ast) {
  arguments_assert(arguments, 1);
  ("Every run of statements written between braces anywhere in this code, the whole");
  ("function's own included.");
  ("A body is not the only place statements sit next to each other. The same two");
  ("lines written under an if, or inside a loop, or in a lambda handed to something");
  ("else, are the same two lines, and anything reading a body alone never sees them.");
  let blocks = [];
  function lambda(node) {
    list_add(blocks, node);
  }
  js_visit_type_node(ast, "BlockStatement", lambda);
  return blocks;
}
