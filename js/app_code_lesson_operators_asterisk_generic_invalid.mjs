import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
export function app_code_lesson_operators_asterisk_generic_invalid(
  root,
  operator,
  combine,
) {
  let missing_right = combine("invalid", operator);
  let missing_left = combine(operator, "invalid");
  app_code_container_light_blue_cycle_code_multiple(root, [
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
