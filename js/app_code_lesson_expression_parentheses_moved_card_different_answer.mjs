import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_expression_parentheses_moved_card_different_answer(
  root,
) {
  arguments_assert(arguments, 1);
  "the card that says what the two worked answers mean: nothing on the line differs except where the pair sits, so where it sits is part of what the line says";
  let plus = js_operator_plus_symbol();
  let times = js_operator_asterisk_symbol();
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let point = app_code_container_light_blue(root);
  html_div_cycle_code(point, [
    "Same numbers, same ",
    plus,
    " and ",
    times,
    ", different answer",
  ]);
  html_div_cycle_code(point, [
    "Where the ",
    open,
    " and ",
    close,
    " go is part of what the line says",
  ]);
}
