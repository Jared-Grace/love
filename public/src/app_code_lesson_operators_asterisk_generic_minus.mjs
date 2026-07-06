import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { html_div_code_multiple } from "../../../love/public/src/html_div_code_multiple.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { digit_positive_random } from "../../../love/public/src/digit_positive_random.mjs";
import { text_combine_right_fn } from "../../../love/public/src/text_combine_right_fn.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_operators_asterisk_generic_minus(
  root,
  operator,
) {
  let c = app_code_container_light_blue(root);
  let minus = js_operator_minus();
  let t = text_first_upper_to("emember, for ");
  html_div_cycle_code(c, [
    t,
    minus,
    " it's possible to have a number only on the right and not on the left: ",
  ]);
  let combined2 = text_combine_right_fn(minus, digit_positive_random);
  const right2 = "right";
  let combined4 = text_combine(minus, right2);
  html_div_code_multiple(c, [combined2, combined4]);
  html_div_cycle_code(c, [
    "However JavaScript does not have something like this for ",
    operator,
  ]);
}
