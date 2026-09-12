import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_integer_division_title_name_id } from "./app_code_lesson_expression_choose_order_integer_division_title_name_id.mjs";
import { app_code_expression_integer_division_random } from "./app_code_expression_integer_division_random.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_expression_value_decoys_rounding } from "./app_code_expression_value_decoys_rounding.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_integer_division_tree_of_code } from "./app_code_lesson_expression_choose_order_integer_division_tree_of_code.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
import { app_code_lesson_expression_choose_order_integer_division_above } from "./app_code_lesson_expression_choose_order_integer_division_above.mjs";
export function app_code_lesson_expression_choose_order_integer_division() {
  arguments_assert(arguments, 0);
  ("an integer division taken a press at a time: Math.floor(17 / 5), press the division, press 3.4, see Math.floor(3.4), press the rounding, press 3");
  ("★ THE LESSON THAT TEACHES THIS LINE ASKED FOR ITS VALUE IN ONE GO AND NEVER ONCE TOOK IT APART. Every other line in this course is pressed apart on a screen of its own before a learner is asked what it comes to, and this was the line where two things happen at once - a division that gives a decimal and a rounding that throws the decimal away. A learner who answers it whole and gets it wrong has no way of knowing which of the two they got wrong.");
  ("It stands behind the lesson that names integer division and in front of the run of lessons that build on it, which is where a pressing lesson stands throughout this course: the thing is named, then pressed apart, then used.");
  ("Nothing about the pressing is new. What is new is one thing the learner has not seen: brackets that belong to the name in front of them rather than to whoever wrote the line.");
  ("Nothing has to refuse a wrong press. The rounding cannot go first because what stands inside it is not a number yet, so the order is read off the line rather than enforced against the learner - the same reading every pressing lesson in this run asks for.");
  ("The wrong values offered are this line's own, out of the one place that decides them for every line whose division is rounded down: the decimal the rounding is about and the whole numbers either side of it, so the same three values stand under both presses and which of them is right changes.");
  let name_id =
    app_code_lesson_expression_choose_order_integer_division_title_name_id();
  function expression(turn_unused) {
    "the next line, drawn fresh";
    "The bank turns a true and a false over from question to question for the lessons whose lines come in two kinds. Every line here is the one kind, so a lesson that read the turn would be dividing its questions by something a learner cannot see.";
    let tree = app_code_expression_integer_division_random();
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
    app_code_lesson_expression_choose_order_integer_division_tree_of_code,
  );
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    app_code_lesson_expression_choose_order_integer_division_above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
