import { html_div_cycle_code_multiple } from "../../../love/public/src/html_div_cycle_code_multiple.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_operators_asterisk_generic_invalid(
  root,
  operator,
  combine,
) {
  let c = app_code_container_light_blue(root);
  let missing_right = combine("invalid", operator);
  let missing_left = combine(operator, "invalid");
  html_div_cycle_code_multiple(c, [
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
    ["", missing_right],
    [
      "And, likewise, if ",
      operator,
      " does not have anything on its left side, then that is also invalid code: ",
    ],
    ["", missing_left],
  ]);
}
