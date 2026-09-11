import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_one_more_above_box_one } from "./app_code_lesson_statement_name_one_more_above_box_one.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { html_div_code_lines } from "./html_div_code_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
export function app_code_lesson_statement_name_one_more_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: the line the screen before this one ended on, and then the same line with a written 1 where the second name was");
  ("The screen before this one put a name on both sides of the equals. Everything about how that line is read - the right side worked out first, the name filled second - was settled there, so this screen changes one thing on the right of the plus and nothing else.");
  ("The line said twice used to close this screen and is now a screen of its own, the next one. It was shown here rather than asked about, and a learner who read the second copy as doing nothing was never given a question that would tell them otherwise - which is the whole of what counting is, so it needed asking rather than showing.");
  ("The reminder's numbers and this screen's numbers have none in common, so no number on the screen is both a value in one box and an answer in another. A learner checking a box against the one above it would otherwise find the same number in two places and have to work out which it was.");
  let r = app_code_lesson_statement_name_one_more_above_box_one(root);
  let box_one = property_get(r, "box_one");
  let name = property_get(r, "name");
  let start = property_get(r, "start");
  let more = property_get(r, "more");
  let once = property_get(r, "once");
  html_div_cycle_code(box_one, [
    "The other name can be a written number instead:",
  ]);
  ("lines with nothing said between them are handed over together, because they are one program - the shape the quiz and the worked example of this same lesson have always drawn a program in.");
  let held = js_code_let_statement(name, start);
  let code = js_code_assign_statement(name, more);
  html_div_code_lines(box_one, [held, code]);
  ("the answer is a code chip like the sum beside it. A number written in a program is code, and every other number on this screen is drawn as code, so an answer set in plain writing would be the one number here dressed as prose.");
  html_div_cycle_code(box_one, [
    "",
    more,
    " comes to ",
    once,
    ", so this is the same line:",
  ]);
  let given_once = js_code_assign_statement(name, once);
  let logged = js_code_console_log_statement(name);
  app_code_code_lines_writes_out(box_one, [given_once, logged], once);
}
