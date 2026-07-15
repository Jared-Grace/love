import { app_code_lesson_validity_operator } from "./app_code_lesson_validity_operator.mjs";
import { app_code_lesson_operators_dot_batch_numbers } from "./app_code_lesson_operators_dot_batch_numbers.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_lesson_operators_dot_numbers_both_sides_text_common } from "./app_code_lesson_operators_dot_numbers_both_sides_text_common.mjs";
import { app_code_lesson_operators_dot_numbers_example } from "./app_code_lesson_operators_dot_numbers_example.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { app_code_lesson_operators_asterisk_generic_invalid } from "./app_code_lesson_operators_asterisk_generic_invalid.mjs";
import { app_code_lesson_operators_asterisk_generic_minus } from "./app_code_lesson_operators_asterisk_generic_minus.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides } from "./app_code_lesson_operators_minus_generic_container_both_sides.mjs";
import { js_operator_dot } from "./js_operator_dot.mjs";
export function app_code_lesson_operators_dot_missing() {
  let operator = js_operator_dot();
  let name_rights = ["property access", "missing"];
  let batch = app_code_lesson_operators_dot_batch_numbers(operator);
  function above(root) {
    app_code_container_light_blue_cycle_code(root, [
      "For this lesson, ",
      operator,
      " will be used with identifiers, and not as a decimal point in a number",
    ]);
    let example_get = app_code_lesson_operators_dot_numbers_example(operator);
    let text_before = text_combine(
      "remember,",
      app_code_lesson_operators_dot_numbers_both_sides_text_common(),
    );
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
  let lesson = app_code_lesson_validity_operator(
    name_rights,
    operator,
    batch,
    above,
  );
  return lesson;
}
