import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_whole_part_title_name_id } from "./app_code_lesson_expression_choose_order_whole_part_title_name_id.mjs";
import { app_code_expression_whole_part_random } from "./app_code_expression_whole_part_random.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_expression_value_decoys_rounding } from "./app_code_expression_value_decoys_rounding.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_whole_part_tree_of_code } from "./app_code_lesson_expression_choose_order_whole_part_tree_of_code.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
import { app_code_lesson_expression_choose_order_whole_part_above } from "./app_code_lesson_expression_choose_order_whole_part_above.mjs";
export function app_code_lesson_expression_choose_order_whole_part() {
  arguments_assert(arguments, 0);
  ("the whole part of a division taken a press at a time: Math.floor(17 / 5) * 5, press the division, press 3.4, see Math.floor(3.4) * 5, press the rounding, press 3, see 3 * 5, press the times, press 15");
  ("It stands in front of the lesson that asks the same line all at once, which is where a pressing lesson stands throughout this course. The formula was the one thing a learner met whole first: they were shown it worked out in words on a card and then asked for its value in one go, while every other line in the course was pressed apart before it was asked for.");
  ("Nothing about the formula is new here and nothing about the pressing is new either. What is new is the two meeting - and one thing the learner has not seen: brackets that belong to the name in front of them rather than to whoever wrote the line.");
  ("Nothing has to refuse a wrong press. The times cannot go first because what stands to the left of it is not a number yet, so the order is read off the line rather than enforced against the learner - the same reading every pressing lesson in this run asks for.");
  ("The wrong values offered are this line's own: the whole number a learner reaches for before the rounding has been pressed at all, and rounding the other way. The lines of plain numbers are answered with what plain numbers are answered with.");
  let name_id =
    app_code_lesson_expression_choose_order_whole_part_title_name_id();
  function expression(turn_unused) {
    "the next line, drawn fresh";
    "The bank turns a true and a false over from question to question for the lessons whose lines come in two kinds - the brackets at one end of the line or the other, a true comparison or a false one. Every line here is the one kind, so a lesson that read the turn would be dividing its questions by something a learner cannot see.";
    let tree = app_code_expression_whole_part_random();
    return tree;
  }
  function answer_draw(parent, tree, on_success, on_wrong, answer_label_set) {
    "the quiz, with this lesson's wrong values";
    app_code_lesson_expression_choose_order_solve_answer_draw(
      parent,
      tree,
      on_success,
      on_wrong,
      answer_label_set,
      app_code_expression_value_decoys_rounding,
    );
  }
  function example_draw(parent, card, tree) {
    "the front page, with the same wrong values the quiz offers";
    app_code_lesson_expression_choose_order_solve_example(
      parent,
      card,
      tree,
      app_code_expression_value_decoys_rounding,
    );
  }
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    expression,
    app_code_lesson_expression_choose_order_whole_part_tree_of_code,
  );
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    app_code_lesson_expression_choose_order_whole_part_above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
