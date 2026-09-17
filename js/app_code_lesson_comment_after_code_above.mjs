import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_sum_lines } from "./app_code_lesson_sum_lines.mjs";
import { js_code_comment_prefix } from "./js_code_comment_prefix.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_comment_skip_line } from "./app_code_lesson_comment_skip_line.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { js_comment_start } from "./js_comment_start.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { js_code_comment_line } from "./js_code_comment_line.mjs";
export function app_code_lesson_comment_after_code_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: the two lines from the lesson before with the slashes in front of the second, then those same two lines joined into one, then a comment after code saying what the code does");
  ("The first box is a program from the screen before this one, numbers and all, so the second box is a single change rather than a new program: the line break is taken out and nothing else is touched. The answer stays the same, and that is read off the card rather than told.");
  ("The second box is where the words the course uses for a comment - the computer skips the rest of that line - are shown meaning what they say. Until now the slashes always started the line, so the rest of the line was the whole of it.");
  ("The third box is what a comment after code is usually for: a note about the code in front of it. It comes last because words after the slashes would be skipped whatever a learner believed, so only code after the slashes can show that the skipping starts at the slashes.");
  ("The numbers are in none of the programs the questions ask about, so no number a learner meets here turns up later as something to recognise rather than to read.");
  let lines = app_code_lesson_sum_lines();
  let prefix = js_code_comment_prefix();
  let first_line = property_get(lines, "first_line");
  let last_line = property_get(lines, "last_line");
  let last_noted = text_combine(prefix, last_line);
  let first_total = property_get(lines, "first_total");
  let value = text_to(first_total);
  let box_lines = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    box_lines,
    context,
    app_code_lesson_comment_skip_line,
    ["two slashes in front of a line skip that line:"],
  );
  app_code_code_lines_writes_out(box_lines, [first_line, last_noted], value);
  let slashes = js_comment_start();
  let box_after = app_code_container_light_blue(root);
  html_div_cycle_code(box_after, [
    "The slashes can also go after code, on the same line:",
  ]);
  let after = list_join_space([first_line, last_noted]);
  app_code_code_lines_writes_out(box_after, [after], value);
  html_div_cycle_code(box_after, [
    "The code before the slashes (",
    slashes,
    ") runs",
  ]);
  html_div_cycle_code(box_after, ["The rest of that line is skipped"]);
  let box_note = app_code_container_light_blue(root);
  html_div_cycle_code(box_note, [
    "A comment after code is often a note about that code:",
  ]);
  let note = js_code_comment_line("add twenty and thirty");
  let noted = list_join_space([first_line, note]);
  app_code_code_lines_writes_out(box_note, [noted], value);
}
