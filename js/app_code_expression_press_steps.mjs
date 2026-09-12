import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { not } from "./not.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_expression_press_steps(item) {
  arguments_assert(arguments, 1);
  ("every shape a learner passing through an expression sees, from the whole line down to the value it comes to: the shape for 1 + 2 * 3 gives back three shapes, 1 + 2 * 3, then 1 + 6, then 7");
  ("The same walk the learner takes and not a walk of its own, because it presses whichever operator javascript would press next and then asks the shape that came back the same question. Anything checked over these shapes is checked over exactly what gets shown, including the shapes in the middle - and the middle is where a line loses a pair of brackets, since the line that was typed out first is usually the one somebody looked at.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    ("a value is the last thing seen and there is nothing after it");
    let last = [item];
    return last;
  }
  let ready = app_code_expression_nodes_ready(item);
  let first = list_get(ready, 0);
  let stepped = app_code_expression_solved(item, first);
  let after = app_code_expression_press_steps(stepped);
  let steps = list_concat([item], after);
  return steps;
}
