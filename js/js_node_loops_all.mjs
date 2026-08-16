import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
export function js_node_loops_all(node) {
  arguments_assert(arguments, 1);
  ("Every loop inside this piece of code, of all five kinds the language has - counting, walking a list, walking an object, and the two that only test.");
  ("Named in one place so that a reading about loops cannot quietly be a reading about the two kinds whoever wrote it happened to think of. A repo-wide answer that silently skipped the while loops would look like a finding rather than like an omission.");
  let types = [
    "ForStatement",
    "ForOfStatement",
    "ForInStatement",
    "WhileStatement",
    "DoWhileStatement",
  ];
  let loops = js_list_types_nodes(node, types);
  return loops;
}
