import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_same_strength_pair_title_name_id } from "./app_code_lesson_expression_choose_order_same_strength_pair_title_name_id.mjs";
import { app_code_lesson_expression_choose_order_solve_answer_draw } from "./app_code_lesson_expression_choose_order_solve_answer_draw.mjs";
import { app_code_expression_value_decoys } from "./app_code_expression_value_decoys.mjs";
import { app_code_lesson_expression_choose_order_solve_example } from "./app_code_lesson_expression_choose_order_solve_example.mjs";
import { app_code_lesson_expression_choose_order_same_strength_pair_questions } from "./app_code_lesson_expression_choose_order_same_strength_pair_questions.mjs";
import { app_code_lesson_expression_choose_order_generic } from "./app_code_lesson_expression_choose_order_generic.mjs";
import { app_code_lesson_expression_choose_order_same_strength_pair_above } from "./app_code_lesson_expression_choose_order_same_strength_pair_above.mjs";
export function app_code_lesson_expression_choose_order_same_strength_pair() {
  arguments_assert(arguments, 0);
  ("two operators of one strength on a line, pressed a part at a time: 8 - 2 + 4, choose the minus, choose 6, see 6 + 4, choose the plus, choose 10");
  ("★ IT IS THE STEP THE THREE-OPERATOR SAME-STRENGTH LESSON SAYS A LEARNER HAS ALREADY TAKEN, and until now nothing had given it to them. That lesson's own words are that position deciding each step is the rule a learner has already met on two-operator lines and is now asked to keep hold of for one step longer - so the two-operator screen was owed, and this is it.");
  ("The lines themselves are not new. Seven lessons hand out two same-strength operators and ask what the whole line comes to, and every other shape in this course was pressed apart before it was asked for whole. This is the pressing those seven never had.");
  ("It stands after the pressing lessons where strength decides rather than in front of the seven it presses for, because the pressing screen itself is not introduced until after them. A learner met the screen on lines where one operator jumps the queue; here neither does, so the rule they had before the queue-jumping - solve left to right - comes back and is the only thing to read.");
  ("Nothing has to refuse the wrong press. The second operator cannot go first because its left-hand side is not a value yet - it is a part still waiting - so the rule is read off the line rather than enforced against the learner.");
  ("Both kinds of same-strength line come up, and which kind is left to the drawing: a line repeating one operator, and a line carrying two different operators of one strength. They are one rule and the walk says so in the learner's own hearing, naming the repeated operators on the first and naming both on the second - so a learner who only ever saw one kind could have read the rule as being about sameness rather than about strength.");
  ("The wrong values offered are the ones every pressing lesson offers: what the other operator would have given on the same two numbers, and what the whole line comes to. They are worked out from the line rather than typed, so no line can be printed beside choices that do not belong to it.");
  let name_id =
    app_code_lesson_expression_choose_order_same_strength_pair_title_name_id();
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
  let bank =
    app_code_lesson_expression_choose_order_same_strength_pair_questions();
  let lesson = app_code_lesson_expression_choose_order_generic(
    name_id,
    app_code_lesson_expression_choose_order_same_strength_pair_above,
    answer_draw,
    example_draw,
    bank,
  );
  return lesson;
}
