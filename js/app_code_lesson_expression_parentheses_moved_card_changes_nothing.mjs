import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_expression_parentheses_moved_card_changes_nothing(
  root,
) {
  arguments_assert(arguments, 1);
  "the first brackets a learner meets that change nothing: they agree with the order the line already had, so they only make it plain";
  let plus = js_operator_plus_symbol();
  let times = js_operator_asterisk_symbol();
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let nothing = app_code_container_light_blue(root);
  html_div_cycle_code(nothing, [
    "",
    "2 + (3 * 4)",
    " is what ",
    "2 + 3 * 4",
    " does anyway",
  ]);
  html_div_cycle_code(nothing, [
    "We always do ",
    times,
    " before ",
    plus,
    ", so it goes first either way",
  ]);
  html_div_cycle_code(nothing, [
    "Those ",
    open,
    " and ",
    close,
    " change nothing - they only make it plain",
  ]);
}
