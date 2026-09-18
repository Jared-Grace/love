import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_one_more_above_box_one } from "./app_code_lesson_statement_name_one_more_above_box_one.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
export function app_code_lesson_statement_name_one_more_above(root, context) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: the line the screen before this one ended on, then the same line with a written 1 where the second name was, and then that line with its sum already worked out");
  ("The screen before this one put a name on both sides of the equals. Everything about how that line is read - the right side worked out first, the name filled second - was settled there, so this screen changes one thing on the right of the plus and nothing else.");
  ("The line said twice used to close this screen and is now a screen of its own, the next one. It was shown here rather than asked about, and a learner who read the second copy as doing nothing was never given a question that would tell them otherwise - which is the whole of what counting is, so it needed asking rather than showing.");
  ("The reminder's numbers and this screen's numbers have none in common, so no number on the screen is both a value in one box and an answer in another. A learner checking a box against the one above it would otherwise find the same number in two places and have to work out which it was.");
  let r = app_code_lesson_statement_name_one_more_above_box_one(root, context);
  let box_one = property_get(r, "box_one");
  let name = property_get(r, "name");
  let start = property_get(r, "start");
  let more = property_get(r, "more");
  let once = property_get(r, "once");
  let name_last = property_get(r, "name_last");
  let number_more = property_get(r, "number_more");
  let given_sum = property_get(r, "given_sum");
  let held = js_code_let_statement(name, start);
  let code = js_code_assign_statement(name, more);
  let logged = js_code_console_log_statement(name);
  ("the name being replaced, the number replacing it, and both lines whole are spelled out in brackets, drawn as code. Said in words alone, a learner has to look down at the line and work out which of the two names moved and what stood in for it - which is the one thing this screen is saying. The line it changed FROM is said beside it, because a change is two lines and the other one is a box further up.");
  html_div_cycle_code(box_one, [
    "The other name (",
    name_last,
    ") can be written as a number (",
    number_more,
    ") instead of a name (",
    code,
    " instead of ",
    given_sum,
    "):",
  ]);
  ("EACH BOX HOLDS A WHOLE PROGRAM AND WHAT IT WRITES OUT, rather than one box holding a line and the next holding the line it comes to. Shown as a part, the two lines had to be held together in the reader's head to be compared at all, and neither part wrote anything out - so the claim that the two say the same thing rested on nothing the screen showed. Shown whole, the same output under both boxes is the claim, drawn.");
  app_code_code_lines_writes_out(box_one, [held, code, logged], once);
  let box_two = app_code_container_light_blue(root);
  ("the sum, what it comes to, and both of the lines are code chips, because every one of them is code. Set in plain writing, a line of a program would be the one thing on this screen dressed as prose.");
  ("the two lines named in this sentence are the very lines drawn below it and in the box above, semicolon and all, rather than shortened halves of them. Said without the semicolon they were a second spelling of a line already on the screen, and the box before this one names its lines whole.");
  let given_once = js_code_assign_statement(name, once);
  html_div_cycle_code(box_two, [
    "",
    more,
    " solves to ",
    once,
    ", so ",
    given_once,
    " instead of ",
    code,
    " will log the same output value:",
  ]);
  app_code_code_lines_writes_out(box_two, [held, given_once, logged], once);
}
