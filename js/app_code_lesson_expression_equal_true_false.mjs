import { app_code_lesson_expression_true_false_compare_generic } from "./app_code_lesson_expression_true_false_compare_generic.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
export function app_code_lesson_expression_equal_true_false() {
  "=== on plain true and false. All four possibilities fit one screen, so the examples are the whole rule rather than a sample of it.";
  let operator = js_operator_triple_equal();
  let rights = ["equal true false"];
  let lesson = app_code_lesson_expression_true_false_compare_generic(
    operator,
    rights,
  );
  return lesson;
}
