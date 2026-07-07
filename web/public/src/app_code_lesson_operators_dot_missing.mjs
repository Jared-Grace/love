import { app_code_lesson_validity_operator } from "../../../love/public/src/app_code_lesson_validity_operator.mjs";
import { app_code_lesson_operators_dot_batch_numbers } from "../../../love/public/src/app_code_lesson_operators_dot_batch_numbers.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_code_lesson_operators_dot_numbers_both_sides_text_common } from "../../../love/public/src/app_code_lesson_operators_dot_numbers_both_sides_text_common.mjs";
import { app_code_lesson_operators_dot_numbers_example } from "../../../love/public/src/app_code_lesson_operators_dot_numbers_example.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_operators_asterisk_generic_invalid } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_invalid.mjs";
import { app_code_lesson_operators_asterisk_generic_minus } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic_minus.mjs";
import { js_code_binary } from "../../../love/public/src/js_code_binary.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides.mjs";
import { js_operator_dot } from "../../../love/public/src/js_operator_dot.mjs";
export function app_code_lesson_operators_dot_missing() {
  const operator = js_operator_dot();
  let math_name = "property access, missing";
  let batch = app_code_lesson_operators_dot_batch_numbers(operator);
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
  let lesson = app_code_lesson_validity_operator(math_name, batch, above);
  return lesson;
}
