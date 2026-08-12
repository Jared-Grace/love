import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_parentheses_moved_card_different_answer(
  root,
  plus,
  times,
  open,
  close,
) {
  arguments_assert(arguments, 5);
  "the card that says what the two worked answers mean: nothing on the line differs except where the pair sits, so where it sits is part of what the line says";
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["Same numbers, same ", plus, " and ", times, ", different answer"],
    ["Where the ", open, " and ", close, " go is part of what the line says"],
  ]);
}
