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
  function above(root, context) {
    app_code_container_light_blue_cycle_code(root, [
      "For this lesson, ",
      operator,
      " will be used with identifiers, and not as a decimal point in a number",
    ]);
    let example_get = app_code_lesson_operators_dot_numbers_example(operator);
    let common = app_code_lesson_operators_dot_numbers_both_sides_text_common();
    let sides = text_combine(common, " on both the left and right sides of the ");
    let card = app_code_container_light_blue(root);
    app_code_remember_from_lesson(card, context, app_code_lesson_operators_dot_numbers, [sides, operator, " : "]);
    let example = example_get();
    let pattern = js_code_binary("left", operator, "right");
    html_div_code_multiple(card, [example, pattern]);
    app_code_lesson_operators_asterisk_generic_minus(root, operator, context);
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
