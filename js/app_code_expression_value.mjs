import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
export function app_code_expression_value(item) {
  arguments_assert(arguments, 1);
  ("what a whole expression comes to, worked out one ready operator at a time - the same way a learner pressing the operators works it out, so an answer printed beside a line can never disagree with the steps that reach it");
  ("Ready-first rather than by a table of strengths. An operator with a value standing on each side of it may go, and where several may go it does not matter which is taken - the line lands in the same place either way. That is the one rule the choose-the-order lesson asks a learner for, read here from the very place they read it.");
  ("A value handed in rather than a shape is already the answer, which is what ends the working: every step replaces an operator with what it comes to, so a line with no operators left in it is a value.");
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    return item;
  }
  let ready = app_code_expression_nodes_ready(item);
  let first = ready[0];
  let stepped = app_code_expression_solved(item, first);
  let value = app_code_expression_value(stepped);
  return value;
}
