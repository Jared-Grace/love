import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_remainder_title_name_id } from "./app_code_lesson_expression_choose_order_remainder_title_name_id.mjs";
import { app_code_expression_remainder_random } from "./app_code_expression_remainder_random.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_expression_value_decoys_rounding } from "./app_code_expression_value_decoys_rounding.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_remainder_tree_of_code } from "./app_code_lesson_expression_choose_order_remainder_tree_of_code.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
import { app_code_lesson_expression_choose_order_remainder_above } from "./app_code_lesson_expression_choose_order_remainder_above.mjs";
export function app_code_lesson_expression_choose_order_remainder() {
  arguments_assert(arguments, 0);
  ("the remainder formula taken a press at a time: 17 - Math.floor(17 / 5) * 5, press the division, press 3.4, press the rounding, press 3, see 17 - 3 * 5, press the times, press 15, see 17 - 15, press the take-away, press 2");
  ("It stands in front of the lesson that asks the same line all at once, which is where a pressing lesson stands throughout this course. The formula was shown worked out in words on a card there and then asked for in one go, and this is where the learner does the working out themselves.");
  ("It is the longest line pressed anywhere in the course, and every part of it has been pressed before. The division and the rounding were pressed on the screen before this one, the times was pressed there too, and the one new reading is that the take-away written at the front of the line happens at the end of it.");
  ("Nothing has to refuse a wrong press. The take-away cannot go first because what stands to the right of it is not a number yet, so the order is read off the line rather than enforced against the learner - the same reading every pressing lesson in this run asks for.");
  ("The wrong values offered are the line's own: the whole number a learner reaches for before the rounding has been pressed, rounding the other way, and on the plain steps what plain numbers are answered with. The value of the whole line is offered throughout, because answering the line instead of the step is the habit this run exists to break.");
  let name_id =
    app_code_lesson_expression_choose_order_remainder_title_name_id();
  function expression(turn_unused) {
    "the next line, drawn fresh";
    "The bank turns a true and a false over from question to question for the lessons whose lines come in two kinds - the brackets at one end of the line or the other, a true comparison or a false one. Every line here is the one kind, so a lesson that read the turn would be dividing its questions by something a learner cannot see.";
    let tree = app_code_expression_remainder_random();
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
    app_code_lesson_expression_choose_order_remainder_tree_of_code,
  );
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    app_code_lesson_expression_choose_order_remainder_above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
