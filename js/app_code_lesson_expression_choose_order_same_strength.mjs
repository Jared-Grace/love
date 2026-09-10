import { app_code_lesson_expression_choose_order_same_strength_title_name_id } from "./app_code_lesson_expression_choose_order_same_strength_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
import { app_code_lesson_expression_choose_order_same_strength_questions } from "./app_code_lesson_expression_choose_order_same_strength_questions.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
import { app_code_lesson_expression_choose_order_same_strength_above } from "./app_code_lesson_expression_choose_order_same_strength_above.mjs";
export function app_code_lesson_expression_choose_order_same_strength() {
  "choosing which part of a line to solve and then what that part comes to, three times over on a line whose operators are all one strength: 8 - 2 - 4 + 7, choose the first minus, choose 6, see 6 - 4 + 7, choose the minus, choose 2, see 2 + 7, choose the plus, choose 9";
  "★ THE CHAINED THIRD STEP ARRIVES HERE, ON ITS OWN. The pressing lessons before this one hand out three operators too, but every one of those lines is two sides worked apart from each other and then compared: press one side, press the other, press the sign between them, and nothing already pressed has to be looked at again. Here the three steps are one chain. Every press changes the line, and the step after it can only be read off the line as it now stands. The lesson after this one hands out the same chain with a stronger operator forced to the front, so a learner sent straight there would be holding a chain and hunting a queue-jumper in the same sitting. This lesson takes the first of those two and gives it a screen of its own.";
  "It used to open the three-operator run, on the reading that a third operator is one new thing wherever it lands. It was moved to the end of that run on 2026-09-10, with its twin and the pair after it: a line whose three steps chain is deeper than a line whose three operators sit on two sides that do not touch, and this course puts the shallower line first. So the third operator now first arrives on Solve both sides of ===, and what arrives here is the chaining of it.";
  "Every operator on a line here is the same strength as the rest of it, so there is never an operator that jumps ahead and never a strength to read. What decides each step is position and nothing else, which is the rule a learner has already met on two-operator lines and is now asked to keep hold of for one step longer.";
  "★ IT CANNOT BE BUILT FROM ONE OPERATOR REPEATED, WHICH IS WHAT IT LOOKS LIKE IT SHOULD BE. Every number on these lines and every value a step comes to is a single digit. Three multiplications need 2 * 2 * 2 * 2, which is sixteen, and three divisions need to start there - so lines of one operator repeated do not exist for the scaling pair at all, and the adding pair has ten of them, every one of them twos. Drawing from a strength rather than from a symbol keeps the third step and gives the lesson nine hundred lines instead of ten.";
  "The wrong values offered are the ones the lessons around it offer: what the other operator would have given, and what the whole line comes to. Both are worth more on a three-step line than on a two-step one, because a learner reaching for the whole line's answer has two steps still to go rather than one.";
  let name_id =
    app_code_lesson_expression_choose_order_same_strength_title_name_id();
  ("the quiz and the front page are the ones every pressing lesson uses, handed this lesson's wrong values - the pressing, the layout and the finishing are the same doing, and only what could be pressed instead differs");
  function answer_draw(parent, tree, on_success, on_wrong, answer_label_set) {
    "the quiz, with this lesson's wrong values: the value the other operator would have given, and the value of the whole line";
    app_code_lesson_expression_choose_order_solve_answer_draw(
      parent,
      tree,
      on_success,
      on_wrong,
      answer_label_set,
      app_code_expression_value_decoys,
    );
  }
  function example_draw(parent, card, tree) {
    "the front page, with the same wrong values the quiz offers";
    app_code_lesson_expression_choose_order_solve_example(
      parent,
      card,
      tree,
      app_code_expression_value_decoys,
    );
  }
  let bank = app_code_lesson_expression_choose_order_same_strength_questions();
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    app_code_lesson_expression_choose_order_same_strength_above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
