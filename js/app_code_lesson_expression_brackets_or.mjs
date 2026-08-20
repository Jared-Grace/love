import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_brackets_or_intro } from "./app_code_lesson_expression_brackets_or_intro.mjs";
import { app_code_lesson_expression_brackets_or_title_name_id } from "./app_code_lesson_expression_brackets_or_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_brackets_expression } from "./app_code_lesson_expression_choose_order_brackets_expression.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
export function app_code_lesson_expression_brackets_or() {
  arguments_assert(arguments, 0);
  ("the whole line answered in one go: false && (true || true) asked for its value, with nothing to press");
  ("The twin of the lesson that walks the same line a press at a time, and the one the run was missing. A learner who can press the bracketed || first has still never been asked to hold both steps at once, which is the thing they will need in front of real code.");
  ("The lines are drawn by the very same maker the pressing lesson draws its lines with, so a learner meets one family of lines twice rather than two families that merely look alike. That maker puts the brackets on either side from line to line, so the answer cannot be read off a place on the line here any more than it could there.");
  ("A screen holds one line that comes to true and one that comes to false, so neither answer can be reached by habit.");
  ("The wrong answer offered is the opposite word, which is the only other thing a line like this can come to.");
  function code_wanted(want_true) {
    ("one line of this lesson's family, drawn to come out to want_true, handed over as the text of it");
    let tree =
      app_code_lesson_expression_choose_order_brackets_expression(want_true);
    let code = app_code_expression_code(tree);
    return code;
  }
  function refill() {
    ("two questions a screen, one line coming to true and one coming to false");
    let v = code_wanted(true);
    let v2 = code_wanted(false);
    let list = [v, v2];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_brackets_or_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above: app_code_lesson_expression_brackets_or_intro,
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
