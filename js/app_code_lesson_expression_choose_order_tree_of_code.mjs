import { app_code_lesson_expression_choose_order_expression_digits } from "./app_code_lesson_expression_choose_order_expression_digits.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { list_get } from "./list_get.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function app_code_lesson_expression_choose_order_tree_of_code(code) {
  "the shape behind a line this lesson printed, worked out again from the line itself: 1 + 2 * 3 gives back the shape whose times is gathered on the right";
  "the lesson used to keep every shape it built beside the line it printed, and look it back up there. That map only ever holds what THIS run of the lesson built, and a line outlives the run that built it - a review saves the line it is going to ask again, and comes back to it after the page has been loaded afresh. So the question always arrived at a map that had never heard of it, and the lesson threw where a learner was owed a question.";
  "still built rather than parsed, in the sense the shape is: what is read off the line is three digits and which side the times is on, and the shape itself is put together by the very unit that puts a new one together. Reading a line of this lesson's own making is safe because the lesson makes only one kind - three digits, one times, one plus - and it is the same file that decides both";
  arguments_assert(arguments, 1);
  let pieces = text_split_space(code);
  list_size_assert(pieces, 5);
  let left_text = list_get(pieces, 0);
  let middle_text = list_get(pieces, 2);
  let right_text = list_get(pieces, 4);
  let left = number_from_text(left_text);
  let middle = number_from_text(middle_text);
  let right = number_from_text(right_text);
  let second_symbol = list_get(pieces, 3);
  let times = js_operator_asterisk_symbol();
  let strong_right = equal(second_symbol, times);
  let tree = app_code_lesson_expression_choose_order_expression_digits(
    left,
    middle,
    right,
    strong_right,
  );
  return tree;
}
