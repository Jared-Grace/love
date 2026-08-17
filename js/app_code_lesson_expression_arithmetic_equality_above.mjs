import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_arithmetic_equality_above(root) {
  arguments_assert(arguments, 1);
  ("first the rule, then it worked once true and once false: each side is done first to its own number, and only then are the two numbers compared");
  let header = app_code_container_light_blue(root);
  html_div_cycle_code(header, ["Both sides of a comparison can be arithmetic"]);
  let yes = app_code_container_light_blue(root);
  html_div_cycle_code(yes, [
    "For ",
    "3 + 4 === 5 + 2",
    ", we solve ",
    "3 + 4",
    " and ",
    "5 + 2",
    " first, before the ",
    "===",
  ]);
  html_div_cycle_code(yes, [
    "Both are ",
    "7",
    ", so ",
    "7 === 7",
    " is ",
    "true",
  ]);
  let no = app_code_container_light_blue(root);
  html_div_cycle_code(no, [
    "For ",
    "10 - 4 === 2 + 5",
    ", we solve ",
    "10 - 4",
    " and ",
    "2 + 5",
    " first",
  ]);
  html_div_cycle_code(no, [
    "That is ",
    "6",
    " and ",
    "7",
    ", so ",
    "6 === 7",
    " is ",
    "false",
  ]);
}
