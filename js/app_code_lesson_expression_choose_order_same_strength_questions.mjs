import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_same_strength_operator_count } from "./app_code_lesson_expression_choose_order_same_strength_operator_count.mjs";
import { app_code_lesson_expression_choose_order_same_strength_questions_generic } from "./app_code_lesson_expression_choose_order_same_strength_questions_generic.mjs";
export function app_code_lesson_expression_choose_order_same_strength_questions() {
  arguments_assert(arguments, 0);
  ("the question bank this lesson draws on: lines of three operators all of one strength, handed out one a screen, and worked out again from the writing they were printed as");
  ("The asking is the asking of the two-operator lesson behind it, out of the one place both of them read, with this lesson's own count handed in. The two are one bank with one number changed, and the number is the whole of what the two lessons differ by.");
  let count =
    app_code_lesson_expression_choose_order_same_strength_operator_count();
  let bank =
    app_code_lesson_expression_choose_order_same_strength_questions_generic(
      count,
    );
  return bank;
}
