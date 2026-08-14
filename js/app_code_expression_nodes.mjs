import { fn_name } from "./fn_name.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_expression_nodes(item) {
  arguments_assert(arguments, 1);
  ("every operator standing in an expression, in the order they are written from left to right");
  ("One button is offered for each of these, so the order they come back in is the order the buttons sit in, and that has to be the order the learner reads. The left side comes first, then this operator, then the right side - which is where each of them appears in the line.");
  ("Its neighbour ",
    fn_name("app_code_expression_nodes_ready"),
    " answers a smaller question: which of these may be worked out next. Every ready operator is one of these, so a press is judged by asking whether the one pressed is in that shorter list.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    let none = [];
    return none;
  }
  let left = property_get(item, "left");
  let left_nodes = app_code_expression_nodes(left);
  let here = [item];
  let right = property_get(item, "right");
  let right_nodes = app_code_expression_nodes(right);
  let all = list_concat_multiple([left_nodes, here, right_nodes]);
  return all;
}
