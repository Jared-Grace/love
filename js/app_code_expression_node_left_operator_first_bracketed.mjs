import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_node_bracketed } from "./app_code_expression_node_bracketed.mjs";
export function app_code_expression_node_left_operator_first_bracketed(
  left,
  first_symbol,
  middle,
  second_symbol,
  right,
) {
  arguments_assert(arguments, 5);
  ("three given values with a given operator between the first two and a given operator before the third, built into the shape where the LEFT of the two operators gathers its sides first and its pair of brackets is written whether or not it changes anything: (false && true) || true");
  ("The twin of the builder that hangs the same five pieces the same way and leaves the brackets to be worked out. A separate builder rather than a word handed in, because the two answer different questions - one asks what a line means, this one asks what a line looks like - and a call site that names which it wants says so by the name it calls.");
  ("It exists for the lesson that moves a pair of brackets from one end of a line to the other. At one end the pair changes the order and at the other it changes nothing, and a printer working the need out off the shape would write the first and drop the second - leaving the lesson with only one of the two lines it is about.");
  ("Nothing here decides anything - every piece is handed in - because the same shape is arrived at two ways: built fresh for a new question, and read back off a line printed earlier. A builder that drew its own values could only serve the first, and the two would be free to mean different things by the same five words.");
  let first_node = app_code_expression_node_bracketed(
    left,
    first_symbol,
    middle,
  );
  let tree = app_code_expression_node(first_node, second_symbol, right);
  return tree;
}
