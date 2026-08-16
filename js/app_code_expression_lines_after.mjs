import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { list_first } from "./list_first.mjs";
import { not } from "./not.mjs";
export function app_code_expression_lines_after(tree, node) {
  arguments_assert(arguments, 2);
  ("the lines a line becomes when this operator is worked out first: the shorter line that step leaves, then the lines that one leaves, down to the value it lands on - written out as code, so a lesson can show a whole order of working in words rather than only as presses");
  ("The line handed in is not among them, because it is the one already on the page; what comes back is only what has not been seen yet.");
  ("After the first step whatever is ready goes next, and which one is not asked, because from there the order no longer changes where the line lands - which is the very thing this is written to show.");
  let stepped = app_code_expression_solved(tree, node);
  let code = app_code_expression_code(stepped);
  let node_is = app_code_expression_node_is(stepped);
  if (not(node_is)) {
    let last = [code];
    return last;
  }
  let ready = app_code_expression_nodes_ready(stepped);
  let first = list_first(ready);
  let rest = app_code_expression_lines_after(stepped, first);
  let lines = list_concat_single(code, rest);
  return lines;
}
