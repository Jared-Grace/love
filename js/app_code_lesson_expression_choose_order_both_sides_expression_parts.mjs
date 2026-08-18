import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_choose_order_both_sides_expression_parts(
  left_parts,
  outer_symbol,
  right_parts,
) {
  arguments_assert(arguments, 3);
  ("two given arithmetic pieces and a given comparison between them, built into the shape a press-both-sides lesson asks about: 3 + 4 === 5 + 2");
  ("Each piece is a number, an operator and a number, in the shape the arithmetic maker hands them over in, so the two sides of the line are made the same way and neither is the special one.");
  ("Nothing here decides anything - every piece is handed in - because the same shape is arrived at two ways: built fresh for a new question, and read back off a line printed earlier. A builder that drew its own numbers could only serve the first.");
  ("No brackets anywhere, and none are needed: arithmetic binds tighter than a comparison, so each side gathers itself and a line printed back from this shape comes out exactly as it went in. That is the whole idea the lesson is teaching, and a bracket written round either side would be teaching it by giving it away.");
  let left = app_code_expression_node(
    left_parts.left,
    left_parts.symbol,
    left_parts.right,
  );
  let right = app_code_expression_node(
    right_parts.left,
    right_parts.symbol,
    right_parts.right,
  );
  let tree = app_code_expression_node(left, outer_symbol, right);
  return tree;
}
