import { word_add_ing } from "../../../love/public/src/word_add_ing.mjs";
import { app_code_lesson_operators_generic_batch_get } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get.mjs";
import { html_div_code_multiple } from "../../../love/public/src/html_div_code_multiple.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function app_code_lesson_operators_minus_generic_container_both_sides(
  root,
  operator,
  verb,
  left_transform,
) {
  let batch_binary = app_code_lesson_operators_generic_batch_get(
    operator,
    left_transform,
  );
  let list2 = batch_binary();
  let first = list_first(list2);
  let c2 = app_code_container_light_blue(root);
  const right = "right";
  let left = "left";
  let combined3 = js_code_binary_spaced_nb(left, operator, right);
  html_div_cycle_code(c2, [
    "When " +
      word_add_ing(verb) +
      " two numbers, there is a number on both the left and right sides of the ",
    operator,
    " : ",
  ]);
  html_div_code_multiple(c2, [first, combined3]);
}
