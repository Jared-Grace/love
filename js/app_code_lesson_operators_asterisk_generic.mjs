import { app_code_symbols_eval_valid_expression } from "./app_code_symbols_eval_valid_expression.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_lesson_validity_operator } from "./app_code_lesson_validity_operator.mjs";
import { text_combine_middle_space } from "./text_combine_middle_space.mjs";
import { app_code_lesson_operators_asterisk_generic_invalid } from "./app_code_lesson_operators_asterisk_generic_invalid.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides_number } from "./app_code_lesson_operators_minus_generic_container_both_sides_number.mjs";
import { app_code_lesson_operators_asterisk_generic_minus } from "./app_code_lesson_operators_asterisk_generic_minus.mjs";
import { app_code_lesson_operators_generic_batch_get_binary } from "./app_code_lesson_operators_generic_batch_get_binary.mjs";
export function app_code_lesson_operators_asterisk_generic(
  operator,
  left_transform,
  verb,
  lesson_name,
) {
  let batch = app_code_lesson_operators_generic_batch_get_binary(
    operator,
    left_transform,
  );
  function above(root) {
    app_code_lesson_operators_minus_generic_container_both_sides_number(
      root,
      operator,
      left_transform,
      verb,
    );
    app_code_lesson_operators_asterisk_generic_minus(root, operator, "");
    app_code_lesson_operators_asterisk_generic_invalid(
      root,
      operator,
      text_combine_middle_space,
    );
  }
  let batch_get = app_code_batch_question_answer_fns(
    batch,
    app_code_symbols_eval_valid_expression,
  );
  let lesson = app_code_lesson_validity_operator(lesson_name, batch_get, above);
  return lesson;
}
