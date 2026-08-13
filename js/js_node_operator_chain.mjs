import { equal } from "./equal.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_operator_chain(node, operator) {
  "The pieces a run of one operator is built out of - 1 + 2 + 3 is three pieces and not two, because the bracketing a tree gives it is not something a reader of the line put there.";
  "Asked of a node that is not that run at all, the answer is the node itself, one piece. That is what lets a caller walk into both sides without checking first, and it is also the truthful answer: something that is not an addition is one thing being added.";
  let type = property_get(node, "type");
  let binary = equal(type, "BinaryExpression");
  if (binary) {
    let node_operator = property_get(node, "operator");
    let same = equal(node_operator, operator);
    if (same) {
      let left = property_get(node, "left");
      let right = property_get(node, "right");
      let before = js_node_operator_chain(left, operator);
      let after = js_node_operator_chain(right, operator);
      let pieces = list_concat(before, after);
      return pieces;
    }
  }
  let alone = [node];
  return alone;
}
