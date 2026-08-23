import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_log_twice_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: writing out twice, followed by the one line that does it and how many times this lesson writes it");
  ("The line is shown once and counted, rather than shown twice. What makes this lesson different from every title above it is still visible before the title is read - there are two of them - but it is said by the count instead of by a second copy.");
  ("Shown twice, it ran off the right edge of a narrow screen. A title's line is spelled with no wrapping allowed, on purpose: a title sits beside a number on a list of a hundred and twenty and a break in it would cost a whole row. So a line that will not fit has nowhere to go but sideways, and it takes the rest of the title with it - the reader of a phone is shown a lesson whose name ends off the screen.");
  ("Nothing inside the brackets. The numbers that stood there were never the lesson - every question picks its own - and a title is recognised rather than worked out, so what is left is the shape alone.");
  ("The words below are what the id is built from, so they are the one thing here that is not free to change. These were reworded once, on 2026-08-23, from two things to twice - safe only because the lesson had never been reachable in prod and had stood in latest for three days. Anything less certain than that is a decision about learners' records rather than about wording.");
  let words = "writing out twice";
  let one = js_code_console_log_statement("...");
  let code = text_combine(one, " (x2)");
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
