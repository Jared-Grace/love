import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
export function app_code_expression_node_right_operator_first(
  left,
  first_symbol,
  middle,
  second_symbol,
  right,
) {
  arguments_assert(arguments, 5);
  ("three given values with a given operator after the first and a given operator between the last two, built into the shape where the RIGHT of the two operators gathers its sides first: false && (true || true), or 8 - 2 * 3");
  ("Nothing here decides anything - every piece is handed in - because the same shape is arrived at two ways: built fresh for a new question, and read back off a line printed earlier. A builder that drew its own values could only serve the first, and the two would be free to mean different things by the same five words.");
  ("The second operator holds the last two values and the first holds what that comes to, which is the other way round from the sibling beside it. Written as five words the two shapes print the same words in the same order, so the shape is the only place the difference lives and it is settled here.");
  ("It is told nothing about which operators these are, and it must not be. Two lessons build this same shape out of two different alphabets - one out of && and ||, one out of the four arithmetic signs - and each of them has already sorted its own two operators into the one that gathers first and the one that waits before it arrives here. A builder that knew && from * would be a builder the other lesson had to write out again, which is exactly what it used to be.");
  ("Brackets are never written here, and whether the printed line carries any is not the same answer for every caller: an inner operator that is the stronger of the two needs none, and one that is weaker can only mean what it says with brackets round it. Both come out right because the helper that prints the line reads the need off the shape instead of being told, which is what lets this one builder serve a lesson that wants brackets and a lesson that must not have them.");
  let second_node = app_code_expression_node(middle, second_symbol, right);
  let tree = app_code_expression_node(left, first_symbol, second_node);
  return tree;
}
