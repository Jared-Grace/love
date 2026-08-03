import { app_code_lesson_expression_true_false_compare_generic } from "./app_code_lesson_expression_true_false_compare_generic.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
export function app_code_lesson_expression_not_equal_true_false() {
  "!== on plain true and false, the sibling of the === lesson. All four possibilities fit one screen, so the examples are the whole rule rather than a sample of it.";
  let operator = js_operator_bang_double_equal();
  let rights = ["not equal true false"];
  let lesson = app_code_lesson_expression_true_false_compare_generic(
    operator,
    rights,
  );
  return lesson;
}
