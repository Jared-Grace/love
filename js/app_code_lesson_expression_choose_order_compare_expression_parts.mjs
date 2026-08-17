import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_choose_order_compare_expression_parts(
  left_number,
  inner_symbol,
  right_number,
  outer_symbol,
  truth,
  comparison_left,
) {
  arguments_assert(arguments, 6);
  ("two given numbers, two given operators and a given true or false, built into the shape a press-the-comparisons lesson asks about: 3 < 5 === true, or true === (3 < 5)");
  ("comparison_left says which end the comparison lands on, and it is the whole reason there are two shapes. With the comparison on the left the part to solve first is also the leftmost thing on the line, and a learner could be right by reading position; with it on the right they cannot. Both are needed, and neither is a different lesson.");
  ("Nothing here decides anything - every piece is handed in - because the same shape is arrived at two ways: built fresh for a new question, and read back off a line printed earlier. A builder that drew its own numbers could only serve the first.");
  ("The brackets on the second shape are not written here and are not remembered anywhere. The shape says the comparison is one side of the outer operator, and a line that is printed back from the shape gathers whatever would otherwise be read in a different order - which on this shape is the comparison, because true === 3 < 5 would be taken as (true === 3) < 5.");
  let comparison = app_code_expression_node(
    left_number,
    inner_symbol,
    right_number,
  );
  if (comparison_left) {
    let flat = app_code_expression_node(comparison, outer_symbol, truth);
    return flat;
  }
  let gathered = app_code_expression_node(truth, outer_symbol, comparison);
  return gathered;
}
