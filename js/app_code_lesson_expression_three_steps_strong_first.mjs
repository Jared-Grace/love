import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_three_operator_count } from "./app_code_lesson_expression_choose_order_three_operator_count.mjs";
import { app_code_expression_flat_random_strong_first } from "./app_code_expression_flat_random_strong_first.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_flat_value_left_to_right } from "./app_code_expression_flat_value_left_to_right.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_expression_three_steps_strong_first_title_name_id } from "./app_code_lesson_expression_three_steps_strong_first_title_name_id.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_expression_choose_order_three_above } from "./app_code_lesson_expression_choose_order_three_above.mjs";
export function app_code_lesson_expression_three_steps_strong_first() {
  arguments_assert(arguments, 0);
  ("the whole line answered in one go: 5 - 6 / 3 + 4 asked for what it comes to, with nothing to press");
  ("The twin of the lesson that walks the same line a press at a time, and the one the run was missing. Its lines each carry a times or a divide that has to be looked for rather than read off the left, so holding the line means finding that operator first and then keeping two more steps in the head - which is the whole of what reading a line of real arithmetic asks.");
  ("The lines are drawn by the very same maker the pressing lesson draws its lines with, so a learner meets one family of lines twice rather than two families that merely look alike. Anything the maker is later taught to draw arrives in both lessons together, and neither can drift away from the other.");
  ("What stands above the card is the pressing lesson's own telling, asked for rather than written again: the card naming which operators are worked out first, and then one whole line of this kind taken all the way down. The naming card is the thing a learner holding the line in their head has to have in front of them, and it is the same card both lessons already ask for.");
  ("The wrong answer offered is the line read from the left, taking each operator in the order it is written. That is the one mistake the whole family of lessons about which operator goes first exists to take away, and a learner who has stopped looking for the stronger operator lands on it exactly.");
  function code_new() {
    "one line of this lesson's family, handed over as the text of it";
    let count = app_code_lesson_expression_choose_order_three_operator_count();
    let tree = app_code_expression_flat_random_strong_first(count);
    let code = app_code_expression_code(tree);
    return code;
  }
  function refill() {
    "two lines a screen, each drawn on its own so where the stronger operator falls is left to the growing rather than arranged";
    let v = code_new();
    let v2 = code_new();
    let list = [v, v2];
    return list;
  }
  function decoys(question, answer) {
    "the tailored wrong answer is the line read from the left with every operator taken in the order it is written, ignoring the one that had to go first";
    let v = app_code_expression_flat_value_left_to_right(question);
    let r = [v];
    return r;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id =
    app_code_lesson_expression_three_steps_strong_first_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above: app_code_lesson_expression_choose_order_three_above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
  });
  return lesson;
}
