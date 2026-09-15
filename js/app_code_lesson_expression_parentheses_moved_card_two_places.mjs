import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_expression_choose_order_arithmetic_parentheses } from "./app_code_lesson_expression_choose_order_arithmetic_parentheses.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { app_code_parentheses_inside_before_outside } from "./app_code_parentheses_inside_before_outside.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_parentheses_moved_card_two_places(
  root,
  open,
  close,
  context,
) {
  arguments_assert(arguments, 4);
  ("the card that sets this lesson up: the rule the learner already has, then the one new fact that the same numbers can hold the parentheses in two places");
  let r = app_code_parentheses_inside_before_outside("");
  let card = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    card,
    context,
    app_code_lesson_expression_choose_order_arithmetic_parentheses,
    ["whatever is inside ", open, " and ", close, r],
  );
  html_div_cycle_code(card, [
    "The same numbers can have the ",
    open,
    " and ",
    close,
    " in two places",
  ]);
}
