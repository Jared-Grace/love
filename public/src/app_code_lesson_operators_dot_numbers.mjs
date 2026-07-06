import { app_code_label_code_quiz_backwards } from "../../../love/public/src/app_code_label_code_quiz_backwards.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { app_code_label_code_example } from "../../../love/public/src/app_code_label_code_example.mjs";
import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { app_code_lesson_operators_dot_missing_batch } from "../../../love/public/src/app_code_lesson_operators_dot_missing_batch.mjs";
import { text_combine_middle_space } from "../../../love/public/src/text_combine_middle_space.mjs";
import { app_code_lesson_operators_dot_numbers_example } from "../../../love/public/src/app_code_lesson_operators_dot_numbers_example.mjs";
import { app_code_lesson_operators_dot_numbers_both_sides_text } from "../../../love/public/src/app_code_lesson_operators_dot_numbers_both_sides_text.mjs";
import { html_div_code_multiple } from "../../../love/public/src/html_div_code_multiple.mjs";
import { number_pi_truncated_text } from "../../../love/public/src/number_pi_truncated_text.mjs";
import { digit_random } from "../../../love/public/src/digit_random.mjs";
import { app_code_lesson_operators_asterisk_generic_invalid } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_invalid.mjs";
import { app_code_lesson_operators_asterisk_generic_minus } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_minus.mjs";
import { js_code_binary } from "../../../love/public/src/js_code_binary.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_operators_arithmetic } from "../../../love/public/src/app_code_operators_arithmetic.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_base_with_quizzes } from "../../../love/public/src/app_code_lesson_base_with_quizzes.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { html_div_code } from "../../../love/public/src/html_div_code.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { js_operator_dot_name } from "../../../love/public/src/js_operator_dot_name.mjs";
import { js_operator_dot } from "../../../love/public/src/js_operator_dot.mjs";
export function app_code_lesson_operators_dot_numbers() {
  const operator = js_operator_dot();
  const operator_name = js_operator_dot_name();
  let math_name = "property access, numbers";
  let batch = app_code_lesson_operators_dot_missing_batch(operator);
  function above(root) {
    const operator_name_math_articled = text_articled_pad_space(operator_name);
    let c4 = app_code_container_light_blue(root);
    let div = html_div_cycle_code(c4, [
      "In JavaScript, " + operator_name_math_articled + " ",
      operator,
      " can be used in numbers as a decimal point:",
    ]);
    let first3 = number_pi_truncated_text();
    html_div_code(c4, first3);
    let c = app_code_container_light_blue(root);
    let d = html_div_cycle_code(c, [
      "Besides decimal points, ",
      operator,
      " is a symbol that can be used like: ",
    ]);
    app_code_operators_arithmetic(d);
    let c2 = app_code_container_light_blue(root);
    let d2 = html_div_text(c2, "We can use ");
    app_code_operators_arithmetic(d2);
    html_span_text(d2, " with numbers");
    html_div_cycle_code(c2, [
      "And we can use ",
      operator,
      " with identifiers:",
    ]);
    html_div_code_multiple(c2, ["person.name", "book.chapters"]);
    let example_get = app_code_lesson_operators_dot_numbers_example(operator);
    let text_before = app_code_lesson_operators_dot_numbers_both_sides_text();
    app_code_lesson_operators_minus_generic_container_both_sides(
      root,
      operator,
      text_before,
      js_code_binary,
      example_get,
    );
    let c3 = app_code_container_light_blue(root);
    html_div_cycle_code(c3, [
      "However, we cannot directly use ",
      operator,
      " with both an identifier and a number",
    ]);
    html_div_text(c3, "We cannot have a number on the right:");
    let right = digit_random();
    let first = js_code_binary("invalid", operator, right);
    html_div_code(c3, first);
    html_div_text(c3, "And we cannot have a number directly on the left:");
    let left = digit_random();
    let first2 = js_code_binary(left, operator, "invalid");
    html_div_code(c3, first2);
    return;
    app_code_lesson_operators_asterisk_generic_minus(root, operator, "");
    app_code_lesson_operators_asterisk_generic_invalid(
      root,
      operator,
      text_combine_middle_space,
    );
  }
  const example_label = app_code_label_code_example();
  const quiz_label = example_label;
  let inside = text_first_upper_to(math_name);
  let name = "Operators " + text_wrap_parenthesis(inside);
  let id = "operators_" + math_name;
  let question_label = app_code_label_code_question();
  let quiz_backwards_label = app_code_label_code_quiz_backwards();
  let r = app_code_lesson_base_with_quizzes(
    name,
    id,
    above,
    batch,
    example_label,
    quiz_label,
    2,
    question_label,
    noop,
    html_text_set,
    quiz_backwards_label,
    html_style_code_dark,
    2,
  );
  return r;
}
