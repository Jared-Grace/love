import { error } from "../../../love/public/src/error.mjs";
import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { app_code_lesson_base_quizzes_forwards_backwards } from "../../../love/public/src/app_code_lesson_base_quizzes_forwards_backwards.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { app_code_quiz_backwards_label_answer_validity } from "../../../love/public/src/app_code_quiz_backwards_label_answer_validity.mjs";
import { app_code_label_code_example } from "../../../love/public/src/app_code_label_code_example.mjs";
import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { app_code_lesson_operators_dot_missing_batch } from "../../../love/public/src/app_code_lesson_operators_dot_missing_batch.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_code_lesson_operators_dot_numbers_both_sides_text_common } from "../../../love/public/src/app_code_lesson_operators_dot_numbers_both_sides_text_common.mjs";
import { app_code_lesson_operators_dot_numbers_example } from "../../../love/public/src/app_code_lesson_operators_dot_numbers_example.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_operators_asterisk_generic_invalid } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_invalid.mjs";
import { app_code_lesson_operators_asterisk_generic_minus } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_minus.mjs";
import { js_code_binary } from "../../../love/public/src/js_code_binary.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { js_operator_dot } from "../../../love/public/src/js_operator_dot.mjs";
export function app_code_lesson_operators_dot_missing() {
  const operator = js_operator_dot();
  let math_name = "property access, missing";
  let batch = app_code_lesson_operators_dot_missing_batch(operator);
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "For this lesson, ",
      operator,
      " will be used with identifiers, and not as a decimal point in a number",
    ]);
    let example_get = app_code_lesson_operators_dot_numbers_example(operator);
    let text_before =
      "remember," +
      app_code_lesson_operators_dot_numbers_both_sides_text_common();
    app_code_lesson_operators_minus_generic_container_both_sides(
      root,
      operator,
      text_before,
      js_code_binary,
      example_get,
    );
    app_code_lesson_operators_asterisk_generic_minus(root, operator, "and ");
    app_code_lesson_operators_asterisk_generic_invalid(
      root,
      operator,
      text_combine,
    );
    return;
  }
  const example_label = app_code_label_code_example();
  const quiz_label = example_label;
  let inside = text_first_upper_to(math_name);
  let name = "Operators " + text_wrap_parenthesis(inside);
  let id = "operators_" + math_name;
  let question_label = app_code_label_code_question();
  let quiz_backwards_label = app_code_quiz_backwards_label_answer_validity();
  let example_count = 2;
  let quiz_backwards_answer_count_override = 2;
  const quizzes = app_code_lesson_base_quizzes_forwards_backwards(
    quiz_label,
    noop,
    html_text_set,
    question_label,
    batch,
    quiz_backwards_label,
    html_style_code_dark,
    quiz_backwards_answer_count_override,
    null,
    html_text_set,
  );
  let question_label2 = error();
  let lesson = app_code_lesson_base(
    id,
    name,
    above,
    example_count,
    batch,
    html_text_set,
    example_label,
    quizzes,
    question_label2,
  );
  return lesson;
}
