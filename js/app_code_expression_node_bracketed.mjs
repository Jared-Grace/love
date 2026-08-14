import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { object_merge } from "./object_merge.mjs";
export function app_code_expression_node_bracketed(left, symbol, right) {
  arguments_assert(arguments, 3);
  ("the same shape as an ordinary operator with a side on each of it, marked as one the lesson wrote brackets around - so it keeps them however it is printed");
  ("Some brackets a lesson types change nothing and are still the point. (3 !== 5) !== (2 === 2) means what 3 !== 5 !== (2 === 2) means, because a comparison on the left is worked out first either way - so a printer writing only the brackets that change the answer would drop the pair on the left. That pair is exactly what the learner is being shown, and a lesson that types it is entitled to have it appear.");
  ("Marked at the point it is built rather than decided at the point it is printed, because only the lesson knows whether it wrote them.");
  let node = app_code_expression_node(left, symbol, right);
  let marked = object_merge(node, {
    bracketed: true,
  });
  return marked;
}
