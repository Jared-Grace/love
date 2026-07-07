import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { app_code_lesson_base_quizzes_forwards_backwards } from "../../../love/public/src/app_code_lesson_base_quizzes_forwards_backwards.mjs";
import { app_code_quiz_backwards_label_answer_validity } from "../../../love/public/src/app_code_quiz_backwards_label_answer_validity.mjs";
import { app_code_label_code_example } from "../../../love/public/src/app_code_label_code_example.mjs";
import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { text_combine_middle_space } from "../../../love/public/src/text_combine_middle_space.mjs";
import { app_code_symbols_eval_valid_expression } from "../../../love/public/src/app_code_symbols_eval_valid_expression.mjs";
import { app_code_lesson_operators_asterisk_generic_invalid } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_invalid.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides_number } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides_number.mjs";
import { app_code_lesson_operators_asterisk_generic_minus } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_minus.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
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
  const example_label = app_code_label_code_example();
  const quiz_label = example_label;
  let inside = text_first_upper_to(lesson_name);
  let name = "Operators " + text_wrap_parenthesis(inside);
  let id = "operators_" + lesson_name;
  let question_label = app_code_label_code_question();
  let batch_get = app_code_batch_question_answer_fns(
    batch,
    app_code_symbols_eval_valid_expression,
  );
  let quiz_backwards_label = app_code_quiz_backwards_label_answer_validity();
  let example_count = 2;
  let quiz_backwards_answer_count_override = 2;
  const quizzes = app_code_lesson_base_quizzes_forwards_backwards(
    quiz_label,
    noop,
    html_text_set,
    question_label,
    batch_get,
    quiz_backwards_label,
    html_style_code_dark,
    quiz_backwards_answer_count_override,
    null,
    html_text_set,
  );
  let lesson = app_code_lesson_base(
    id,
    name,
    above,
    example_count,
    batch_get,
    html_text_set,
    example_label,
    quizzes,
    question_label,
  );
  return lesson;
}
