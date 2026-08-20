import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_choose_order_not_pair_expression } from "./app_code_lesson_expression_choose_order_not_pair_expression.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_expression_not_pair_intro } from "./app_code_lesson_expression_not_pair_intro.mjs";
import { app_code_lesson_expression_not_pair_title_name_id } from "./app_code_lesson_expression_not_pair_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
export function app_code_lesson_expression_not_pair() {
  arguments_assert(arguments, 0);
  ("the whole line answered in one go: !(true && false) asked for its value, with nothing to press");
  ("Two lessons stand behind this one and it needs both. One put a ! around a whole comparison and taught the brackets; one walked a ! around a joined pair a press at a time. What is left to learn is only to hold the two steps at once, which is what every in-your-head lesson of this run is for.");
  ("The lines are drawn by the very same maker the pressing lesson draws its lines with, so a learner meets one family of lines twice rather than two families that merely look alike. Anything the maker is later taught to draw arrives in both lessons together, and neither can drift away from the other.");
  ("A screen holds one line that comes to true and one that comes to false, so neither answer can be reached by habit. Which operator stands inside is left to the maker, which draws it, so it does not line up with the answer.");
  ("The wrong answer offered is the opposite word, which is the only other thing a line like this can come to.");
  function code_wanted(want_true) {
    "one line of this lesson's family, drawn to come out to want_true, handed over as the text of it";
    let tree =
      app_code_lesson_expression_choose_order_not_pair_expression(want_true);
    let code = app_code_expression_code(tree);
    return code;
  }
  function refill() {
    "two questions a screen, one line coming to true and one coming to false";
    let v = code_wanted(true);
    let v2 = code_wanted(false);
    let list = [v, v2];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_not_pair_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above: app_code_lesson_expression_not_pair_intro,
    name_id,
    next_arg,
    example_count: 2,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    forwards_answer_count_override: 2,
  });
  return lesson;
}
