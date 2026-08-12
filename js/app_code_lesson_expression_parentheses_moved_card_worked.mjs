import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_parentheses_moved_card_worked(root) {
  arguments_assert(arguments, 1);
  "the two placements worked out a step at a time on the same three numbers, one card each, so the two answers stand side by side";
  let around_plus = app_code_container_light_blue(root);
  html_div_cycle_code(around_plus, [
    "",
    "(2 + 3) * 4",
    " does the ",
    "2 + 3",
    " first",
  ]);
  html_div_cycle_code(around_plus, [
    "",
    "2 + 3",
    " is ",
    "5",
    ", so we have ",
    "5 * 4",
  ]);
  html_div_cycle_code(around_plus, ["So ", "(2 + 3) * 4", " is ", "20"]);
  let around_times = app_code_container_light_blue(root);
  html_div_cycle_code(around_times, [
    "",
    "2 + (3 * 4)",
    " does the ",
    "3 * 4",
    " first",
  ]);
  html_div_cycle_code(around_times, [
    "",
    "3 * 4",
    " is ",
    "12",
    ", so we have ",
    "2 + 12",
  ]);
  html_div_cycle_code(around_times, ["So ", "2 + (3 * 4)", " is ", "14"]);
}
