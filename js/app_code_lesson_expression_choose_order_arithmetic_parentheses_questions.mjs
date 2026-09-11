import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_expression_choose_order_arithmetic_parentheses_expression } from "./app_code_lesson_expression_choose_order_arithmetic_parentheses_expression.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_arithmetic_parentheses_tree_of_code } from "./app_code_lesson_expression_choose_order_arithmetic_parentheses_tree_of_code.mjs";
export function app_code_lesson_expression_choose_order_arithmetic_parentheses_questions() {
  arguments_assert(arguments, 0);
  ("the question bank this lesson draws on: lines whose + or - stands in ( and ) at one end of a times and then at the other, given out one a screen and worked out again from the writing they were printed as");
  ("The asking is the same asking as every other press-at-a-time lesson - one line a screen, worked out again from the line - so it is asked for rather than written out here. What differs is the maker and the reader, and they differ together, because a reader that could not take apart what its own maker builds would throw where a learner was owed a question.");
  ("The first line a learner ever meets puts the marks at the RIGHT end, so the part that may be solved first is not the leftmost thing on the line. A learner shown the other end first would be right by pressing the leftmost operator, and would be right for a reason that fails on the next question - the same reason the pressing banks before this one open the way they do.");
  ("After that the two ends take turns rather than being drawn by chance, because there are only two of them: chance would run three or four of one end together often enough for a learner to settle into it, and turns cost nothing to arrange.");
  ("The turning is the shared bank's own. It turns a true and a false from question to question and hands it to the maker, saying nothing about what the two are - so a lesson whose lines are told apart by which end the marks stand at asks for that turning by reading it as the end. It opens on the true, so the end this lesson wants first is the one the false names.");
  function expression_turning(turn) {
    "the next line: the marks at the other end from the line before, starting at the right end";
    let group_left = not(turn);
    let tree =
      app_code_lesson_expression_choose_order_arithmetic_parentheses_expression(
        group_left,
      );
    return tree;
  }
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    expression_turning,
    app_code_lesson_expression_choose_order_arithmetic_parentheses_tree_of_code,
  );
  return bank;
}
