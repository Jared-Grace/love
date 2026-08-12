import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { app_code_parentheses_inside_before_outside } from "./app_code_parentheses_inside_before_outside.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_parentheses_moved_card_two_places(
  root,
  open,
  close,
) {
  arguments_assert(arguments, 3);
  "the card that sets this lesson up: the rule the learner already has, then the one new fact that the same numbers can hold the brackets in two places";
  let r = app_code_parentheses_inside_before_outside("");
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["Remember: whatever is inside ", open, " and ", close, r],
    ["The same numbers can have the ", open, " and ", close, " in two places"],
  ]);
}
