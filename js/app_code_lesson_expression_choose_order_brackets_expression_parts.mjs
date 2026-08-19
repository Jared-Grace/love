import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
export function app_code_lesson_expression_choose_order_brackets_expression_parts(
  left_truth,
  and_symbol,
  inner_left_truth,
  or_symbol,
  inner_right_truth,
) {
  arguments_assert(arguments, 5);
  ("three given trues and falses with a given && after the first and a given || between the last two, built into the shape the brackets lesson asks about: false && (true || true)");
  ("Nothing here decides anything - every piece is handed in - because the same shape is arrived at two ways: built fresh for a new question, and read back off a line printed earlier. A builder that drew its own trues and falses could only serve the first, and the two would be free to mean different things by the same five words.");
  ("The || holds the last two and the && holds what that comes to, which is the other way round from the lesson before it. Written as five words the two lessons print the same words in the same order, so the shape is the only place the difference lives and it is settled here.");
  ("No brackets are written here either, and the printed line still comes out with them: || is weaker than && , so a || standing on the right of an && can only mean what it says with brackets round it, and the same helper that decides every other bracket in the run puts them there. Written by hand they could disagree with the shape, and the line a learner presses would be a different line from the one being solved.");
  let or_node = app_code_expression_node(
    inner_left_truth,
    or_symbol,
    inner_right_truth,
  );
  let tree = app_code_expression_node(left_truth, and_symbol, or_node);
  return tree;
}
