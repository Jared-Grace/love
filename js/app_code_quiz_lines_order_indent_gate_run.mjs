import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_lines_order_indent_unlike } from "./app_code_quiz_lines_order_indent_unlike.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export function app_code_quiz_lines_order_indent_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every program a put-the-lines-in-order quiz asks for comes out, drawn the way the quiz draws the lines tapped, exactly as the lesson wrote it. Throws so the dispatcher seam exits nonzero.");
  ("IT RATCHETS AGAINST NOTHING. Measured 2026-10-23 over twenty rounds of every lesson: ten thousand quiz programs, two thousand eight hundred of them with { }, four hundred and eighty nested two deep, and not one drawn unlike its lesson. So a shrink-only record would hold nothing.");
  let r = app_code_quiz_lines_order_indent_unlike();
  let walked = property_get(r, "walked");
  let found = property_get(r, "found");
  let hint = text_combine_multiple([
    "these lessons write a program the unscramble quiz draws with a different indent, so the quiz shows it unlike the lesson - write it with two spaces for each { still open, as ",
    fn_name("app_code_lines_indent_braces"),
    " draws it",
  ]);
  let result = list_empty_is_assert_walked_generic(walked, found, hint);
  return result;
}
