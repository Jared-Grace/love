import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { text_combine_middle_space } from "../../../love/public/src/text_combine_middle_space.mjs";
import { app_code_symbols_eval_valid_expression } from "../../../love/public/src/app_code_symbols_eval_valid_expression.mjs";
import { app_code_lesson_operators_asterisk_generic_invalid } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_invalid.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides_number } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides_number.mjs";
import { app_code_lesson_operators_asterisk_generic_minus } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_minus.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { app_code_lesson_operators_generic_batch_get_binary } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_binary.mjs";
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
  const example_label = "Is this code valid? ";
  const quiz_label = example_label;
  let inside = text_first_upper_to(lesson_name);
  let name = "Operators " + text_wrap_parenthesis(inside);
  let id = "operators_" + lesson_name;
  let question_label = "Code: ";
  let batch_get = app_code_batch_question_answer_fns(
    batch,
    app_code_symbols_eval_valid_expression,
  );
  let r = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    noop,
    batch_get,
    example_label,
    quiz_label,
    2,
    app_code_symbol,
    question_label,
  );
  return r;
}
