import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { app_code_lesson_operators_generic_batch_get } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get.mjs";
import { html_div_code_multiple } from "../../../love/public/src/html_div_code_multiple.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function app_code_lesson_operators_minus_generic_container_both_sides(
  root,
  operator,
  left_transform,
  text_when,
  noun,
  code_to,
  example_get,
) {
  let first = example_get();
  let c2 = app_code_container_light_blue(root);
  const right = "right";
  let left = "left";
  let combined3 = code_to(left, operator, right);
  let u = text_first_upper_to(
    "when " +
      text_when +
      " there is a " +
      noun +
      " on both the left and right sides of the ",
  );
  html_div_cycle_code(c2, [u, operator, " : "]);
  html_div_code_multiple(c2, [first, combined3]);
  function example_get() {
    let batch_binary = app_code_lesson_operators_generic_batch_get(
      operator,
      left_transform,
    );
    let list2 = batch_binary();
    let first = list_first(list2);
    return first;
  }
}
