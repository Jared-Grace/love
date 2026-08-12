import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_parentheses_moved_card_changes_nothing(
  root,
  plus,
  times,
  open,
  close,
) {
  arguments_assert(arguments, 5);
  "the first brackets a learner meets that change nothing: they agree with the order the line already had, so they only make it plain";
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["", "2 + (3 * 4)", " is what ", "2 + 3 * 4", " does anyway"],
    ["We always do ", times, " before ", plus, ", so it goes first either way"],
    ["Those ", open, " and ", close, " change nothing - they only make it plain"],
  ]);
}
