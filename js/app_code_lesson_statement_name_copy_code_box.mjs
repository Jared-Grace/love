import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code_lines } from "./html_div_code_lines.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_name_no_quotes_box } from "./app_code_lesson_name_no_quotes_box.mjs";
export function app_code_lesson_statement_name_copy_code_box(
  root,
  cup_first,
  cup_last,
  name_copy,
) {
  arguments_assert(arguments, 4);
  ("the last two boxes read before the first question: the cup story written out as code, and then what the quote marks would have done to it");
  ("The story is told first in cups and then again in code, and the code box says nothing the cups did not say. A learner arrives at it already knowing what happens; all that is left is which line says which part, which is the only thing code can be learnt by.");
  ("The line that fills the third cup says in the same breath that nothing leaves the cup it was filled from. That is the one thing a learner will doubt - a cup story can be watched, and a line of code cannot - so it is said where the line is, and not left to the picture three boxes higher up.");
  ("The two cups are handed down from the screen above rather than asked for again here. Asked for again, this box and the one above it opened with the same five lines of asking, which is a helper waiting to be written - and the honest helper is not a bundle of five getters but the cup itself: what is in it and the name on it, travelling as one thing, which is the shape the row of cups already takes them in.");
  let word_first = list_first(cup_first);
  let name_first = list_last(cup_first);
  let word_last = list_first(cup_last);
  let name_last = list_last(cup_last);
  let box_code = app_code_container_light_blue(root);
  let quoted_first = app_code_string_code(word_first);
  let held_first = js_code_let_statement(name_first, quoted_first);
  let quoted_last = app_code_string_code(word_last);
  let held_last = js_code_let_statement(name_last, quoted_last);
  let copied = js_code_let_statement(name_copy, name_first);
  let logged = js_code_console_log_statement(name_copy);
  html_div_cycle_code(box_code, [
    "In JS we make cups ",
    name_first,
    " and ",
    name_last,
    " like this:",
  ]);
  ("the two lines are handed over together rather than one at a time, because nothing is said between them: they are one program, and the quiz and the worked example of this same lesson have always drawn a program as one chip.");
  html_div_code_lines(box_code, [held_first, held_last]);
  html_div_cycle_code(box_code, [
    "Then we make ",
    name_copy,
    " and fill it with whatever is in ",
    name_first,
    " (and this does not remove it from ",
    name_first,
    "):",
  ]);
  html_div_code(box_code, copied);
  html_div_cycle_code(box_code, [
    "Then we write out what is inside ",
    name_copy,
  ]);
  ("A BOX THAT SHOWS WHAT A PROGRAM WRITES OUT SHOWS THE WHOLE PROGRAM. The two lines that make the cups and the line that copies one of them stand above as the lines being taught, and stand here again because the word written out underneath is a claim, and a claim about what a program writes out is only checkable against a program that runs on its own. Shown as the log line alone, the answer rested on three lines a learner had to carry down the box - and this screen's whole point is which cup the copied word came from, which only the copying line says.");
  let lines = [held_first, held_last, copied, logged];
  app_code_code_lines_writes_out(box_code, lines, word_first);
  app_code_lesson_name_no_quotes_box(root, name_first, name_copy, word_first);
  return box_code;
}
