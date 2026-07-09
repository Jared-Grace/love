import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { html_div_code_multiple } from "../../../love/public/src/html_div_code_multiple.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_code_lesson_operators_minus_generic_container_both_sides(
  root,
  operator,
  text_before,
  code_to,
  example_get,
) {
  let c = app_code_container_light_blue(root);
  let u = text_first_upper_to(
    text_combine(text_before, " on both the left and right sides of the "),
  );
  html_div_cycle_code(c, [u, operator, " : "]);
  const right = "right";
  let left = "left";
  let combined = code_to(left, operator, right);
  let first = example_get();
  html_div_code_multiple(c, [first, combined]);
}
