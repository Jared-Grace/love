import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_parentheses_inside_before_outside } from "./app_code_parentheses_inside_before_outside.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
export function app_code_lesson_expression_parentheses_moved_card_two_places(
  root,
) {
  arguments_assert(arguments, 1);
  "the card that sets this lesson up: the rule the learner already has, then the one new fact that the same numbers can hold the brackets in two places";
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let idea = app_code_container_light_blue(root);
  let r = app_code_parentheses_inside_before_outside("");
  html_div_cycle_code(idea, ["Remember: whatever is inside ", open, " and ", close, r]);
  html_div_cycle_code(idea, [
    "The same numbers can have the ",
    open,
    " and ",
    close,
    " in two places",
  ]);
}
