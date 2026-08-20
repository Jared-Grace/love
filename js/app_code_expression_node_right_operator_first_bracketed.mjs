import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_node_bracketed } from "./app_code_expression_node_bracketed.mjs";
export function app_code_expression_node_right_operator_first_bracketed(
  left,
  first_symbol,
  middle,
  second_symbol,
  right,
) {
  arguments_assert(arguments, 5);
  ("three given values with a given operator after the first and a given operator between the last two, built into the shape where the RIGHT of the two operators gathers its sides first and its pair of brackets is written whether or not it changes anything: false && (true || true)");
  ("The twin of the builder that hangs the same five pieces the same way and leaves the brackets to be worked out. A separate builder rather than a word handed in, because the two answer different questions - one asks what a line means, this one asks what a line looks like - and a call site that names which it wants says so by the name it calls.");
  ("It exists beside the one that gathers the first two, so that a lesson moving a pair of brackets from one end of a line to the other writes them the same way at both ends. Only one of the two ends needs them to be understood, and a lesson about the marks themselves cannot have the other end quietly lose them.");
  ("Nothing here decides anything - every piece is handed in - because the same shape is arrived at two ways: built fresh for a new question, and read back off a line printed earlier. A builder that drew its own values could only serve the first, and the two would be free to mean different things by the same five words.");
  let second_node = app_code_expression_node_bracketed(
    middle,
    second_symbol,
    right,
  );
  let tree = app_code_expression_node(left, first_symbol, second_node);
  return tree;
}
