import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
export function app_code_expression_node_left_operator_first(
  left,
  first_symbol,
  middle,
  second_symbol,
  right,
) {
  arguments_assert(arguments, 5);
  ("three given values with a given operator between the first two and a given operator before the third, built into the shape where the LEFT of the two operators gathers its sides first: false && true || true, or 8 * 2 - 3");
  ("Nothing here decides anything - every piece is handed in - because the same shape is arrived at two ways: built fresh for a new question, and read back off a line printed earlier. A builder that drew its own values could only serve the first, and the two would be free to mean different things by the same five words.");
  ("The first operator holds the first two values and the second holds what that comes to. Written the other way round the line prints exactly the same five words, so the shape is the only place the difference lives and it is settled here.");
  ("It is told nothing about which operators these are, and it must not be. Two lessons build this same shape out of two different alphabets - one out of && and ||, one out of the four arithmetic signs - and each of them has already sorted its own two operators into the one that gathers first and the one that waits before it arrives here. A builder that knew && from * would be a builder the other lesson had to write out again, which is exactly what it used to be.");
  ("Brackets are never written here, and no line built this way has needed any yet: every caller so far hands the operator that gathers first in on the left, and an operator standing leftmost gathers its own two sides whatever the other one is. Whether the printed line needs brackets is read off the shape by the helper that prints it rather than settled here, so a caller that ever did the other thing would still get a line saying what its shape says.");
  let first_node = app_code_expression_node(left, first_symbol, middle);
  let tree = app_code_expression_node(first_node, second_symbol, right);
  return tree;
}
