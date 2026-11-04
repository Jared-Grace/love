import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_code_for_before_condition_update_lines } from "./js_code_for_before_condition_update_lines.mjs";
export function js_code_for_condition_update_lines(condition, statements) {
  arguments_assert(arguments, 2);
  ("a for with its last line moved up after its second semicolon, as the lines it is written on: for (; condition; last) {, each other line pushed in by two spaces, and the closing brace. Handed the same two things as ",
    fn_name("js_code_for_condition_lines"),
    ", so one program can be written both ways");
  let lines = js_code_for_before_condition_update_lines(
    "",
    condition,
    statements,
  );
  return lines;
}
