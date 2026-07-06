import { html_div_cycle_code_multiple } from "../../../love/public/src/html_div_cycle_code_multiple.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_operators_asterisk_generic_invalid(
  root,
  operator,
) {
  let c4 = app_code_container_light_blue(root);
  let combined = text_combine("invalid ", operator);
  let combined3 = text_combine(operator, " invalid");
  html_div_cycle_code_multiple(c4, [
    [
      "Therefore, ",
      operator,
      " must have values both on the left side and the right side",
    ],
    [
      "So if ",
      operator,
      " does not have anything on its right side, then that is invalid code: ",
    ],
    ["", combined],
    [
      "And, likewise, if ",
      operator,
      " does not have anything on its left side, then that is also invalid code: ",
    ],
    ["", combined3],
  ]);
}
