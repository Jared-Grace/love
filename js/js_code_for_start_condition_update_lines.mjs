import { arguments_assert } from "./arguments_assert.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
import { js_code_for_before_condition_update_lines } from "./js_code_for_before_condition_update_lines.mjs";
export function js_code_for_start_condition_update_lines(
  start,
  condition,
  statements,
) {
  arguments_assert(arguments, 3);
  ("a for holding all three of its parts, as the lines it is written on: for (start; condition; last) {. start is a whole statement, as let n = 1; is, so nothing stands above the for");
  let before = text_without_ending(start, ";");
  let lines = js_code_for_before_condition_update_lines(
    before,
    condition,
    statements,
  );
  return lines;
}
