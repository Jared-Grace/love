import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_parentheses_expression } from "./app_code_lesson_expression_choose_order_parentheses_expression.mjs";
import { app_code_lesson_expression_choose_order_parentheses_tree_of_code } from "./app_code_lesson_expression_choose_order_parentheses_tree_of_code.mjs";
export function app_code_lesson_expression_choose_order_parentheses_questions() {
  arguments_assert(arguments, 0);
  ("the question bank of the parentheses lesson: lines whose || stands in parentheses at one end of an && and then at the other, given out one a screen and worked out again from the writing they were printed as");
  ("The asking is the same asking as every other press-at-a-time lesson - one line a screen, true and false taking turns - so it is asked for rather than written out here. What differs is the maker and the reader, and they differ together, because this lesson writes parentheses where the one before it wrote none.");
  ("The side the parentheses stand on takes turns here rather than being drawn, because a screen holds one line and turns are what make the two sides certain to be met. Drawn, a learner could be shown the same end four or five times running and would have been taught the lesson at one end of a line.");
  ("Turning is safe in this lesson and would not be in its twin. What is asked for here is which operator goes first, and that is the parenthesised one wherever it stands, so the side turning beside an answer turning pairs nothing with anything. The twin asks what the line comes to, so there the two turning together would be a rule to read the answer off the parentheses' position.");
  let parentheses_left = true;
  function expression_turning(want_true) {
    "the next line: the parentheses at the other end from the line before";
    let tree = app_code_lesson_expression_choose_order_parentheses_expression(
      want_true,
      parentheses_left,
    );
    parentheses_left = not(parentheses_left);
    return tree;
  }
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    expression_turning,
    app_code_lesson_expression_choose_order_parentheses_tree_of_code,
  );
  return bank;
}
