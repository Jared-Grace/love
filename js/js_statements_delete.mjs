import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_delete } from "./js_statement_delete.mjs";
import { each } from "./each.mjs";
export function js_statements_delete(ast, nodes) {
  arguments_assert(arguments, 2);
  ("Takes a whole run of statements back out of the tree.");
  ("The singular twin refuses more than one node on purpose: it finds the one block the node stands in and cuts it out there, and a list of several has no single block to name. So the plural is that same move asked once per node, and each node is found afresh - a cut made higher up cannot leave a later one pointing at a place that has already moved.");
  ("The nodes must be the very nodes standing in this tree, not copies of them, because each is found by identity.");
  ("$plain ast");
  function delete_one(node) {
    let one = [node];
    js_statement_delete(ast, one);
  }
  each(nodes, delete_one);
}
