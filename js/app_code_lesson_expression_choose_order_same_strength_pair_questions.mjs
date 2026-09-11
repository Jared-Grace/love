import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_same_strength_pair_operator_count } from "./app_code_lesson_expression_choose_order_same_strength_pair_operator_count.mjs";
import { app_code_lesson_expression_choose_order_same_strength_questions_generic } from "./app_code_lesson_expression_choose_order_same_strength_questions_generic.mjs";
export function app_code_lesson_expression_choose_order_same_strength_pair_questions() {
  arguments_assert(arguments, 0);
  ("the question bank this lesson draws on: two-operator lines whose operators are both the same strength, one a screen");
  ("The asking is the asking of the three-operator lesson further on, out of the one place both of them read, with this lesson's own count handed in. The two are one bank with one number changed, and the number is the whole of what the two lessons differ by.");
  let count =
    app_code_lesson_expression_choose_order_same_strength_pair_operator_count();
  let bank =
    app_code_lesson_expression_choose_order_same_strength_questions_generic(
      count,
    );
  return bank;
}
