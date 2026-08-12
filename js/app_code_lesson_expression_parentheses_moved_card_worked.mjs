import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_parentheses_moved_card_worked(root) {
  arguments_assert(arguments, 1);
  "the two placements worked out a step at a time on the same three numbers, one card each, so the two answers stand side by side";
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["", "(2 + 3) * 4", " does the ", "2 + 3", " first"],
    ["", "2 + 3", " is ", "5", ", so we have ", "5 * 4"],
    ["So ", "(2 + 3) * 4", " is ", "20"],
  ]);
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["", "2 + (3 * 4)", " does the ", "3 * 4", " first"],
    ["", "3 * 4", " is ", "12", ", so we have ", "2 + 12"],
    ["So ", "2 + (3 * 4)", " is ", "14"],
  ]);
}
