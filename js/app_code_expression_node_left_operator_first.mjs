import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
export function app_code_expression_node_left_operator_first(
  left_truth,
  and_symbol,
  middle_truth,
  or_symbol,
  right_truth,
) {
  arguments_assert(arguments, 5);
  ("three given trues and falses with a given && between the first two and a given || before the third, built into the shape the and-before-or lesson asks about: false && true || true");
  ("Nothing here decides anything - every piece is handed in - because the same shape is arrived at two ways: built fresh for a new question, and read back off a line printed earlier. A builder that drew its own trues and falses could only serve the first, and the two would be free to mean different things by the same five words.");
  ("The && holds the first two and the || holds what that comes to, which is what the whole lesson is about. Written the other way round the line would print exactly the same five words, so the shape is the only place the difference lives and it is settled here.");
  ("No brackets, and none are needed: && is stronger than ||, so the && gathers its own two sides and a line printed back from this shape comes out exactly as it went in. A bracket written round the && would be teaching the lesson by giving it away.");
  let and_node = app_code_expression_node(left_truth, and_symbol, middle_truth);
  let tree = app_code_expression_node(and_node, or_symbol, right_truth);
  return tree;
}
