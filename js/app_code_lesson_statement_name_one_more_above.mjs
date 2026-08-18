import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_name_one_more_above_start } from "./app_code_lesson_statement_name_one_more_above_start.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
export function app_code_lesson_statement_name_one_more_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: the line the screen before this one ended on, the same line with a written 1 where the second name was, and then that line written twice");
  ("The screen before this one put a name on both sides of the equals. Everything about how that line is read - the right side worked out first, the name filled second - was settled there, so this screen changes one thing on the right of the plus and nothing else.");
  ("The last box is the reason the screen exists. A written 1 rather than a name is a small change, and on its own it would not be worth a screen; the line done twice is what a learner has never seen, and it is how every count in every program is kept.");
  ("It is shown rather than quizzed. Nothing in it is new - the same line said twice, and a learner has already been told that the name is filled with what the right side came to - so it is something to read and check, and the questions stay on the one line the screen changed.");
  ("The reminder's numbers and this screen's numbers have none in common, so no number on the screen is both a value in one box and an answer in another. A learner checking a box against the one above it would otherwise find the same number in two places and have to work out which it was.");
  let r = app_code_lesson_statement_name_one_more_above_start(root);
  let start = property_get(r, "start");
  let name = property_get(r, "name");
  let code = property_get(r, "code");
  let box_twice = property_get(r, "box_twice");
  let twice = property_get(r, "twice");
  html_div_cycle_code(box_twice, [
    "Say that line twice and the name goes up twice",
  ]);
  ("the four lines are handed over together rather than one at a time, because nothing is said between them: they are one program, and the two middle lines being the same line twice is the whole of what this box shows.");
  let held = js_code_let_statement(name, start);
  let logged = js_code_console_log_statement(name);
  let lines = [held, code, code, logged];
  app_code_code_lines_writes_out(box_twice, lines, twice);
  html_div_cycle_code(box_twice, ["This is how a program counts"]);
}
