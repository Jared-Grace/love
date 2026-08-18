import { html_div_code_lines } from "./html_div_code_lines.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_lesson_statement_name_two_word } from "./app_code_lesson_statement_name_two_word.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_cups_row_holding } from "./app_code_lesson_cups_row_holding.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_lesson_statement_name_copy_kept_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: the two cups the copying lesson left standing, then one of them emptied and refilled while the other keeps what it was given, and then the same story as one program");
  ("The cups are the ones the copying lesson ended on, holding the same word, drawn the same way. A learner is being asked what happens next to a picture they have already watched being built, so nothing before the change is new and the change is the only thing to look at.");
  ("Only the first cup changes, and the second is drawn again unchanged beside it. The whole lesson is that the second cup did not follow the first, and a cup that vanished from the row while the sentence was being read would leave that to be taken on trust.");
  ("The taking out is said as a person doing it. The copying lesson was careful that nobody ever poured one cup into another; this screen is the one where something really is removed, and saying who removed it and from which cup keeps the two apart.");
  ("It is said flatly afterwards that nobody touched the second cup. That is the whole fact, and a learner who has just watched one cup change will look at the other one expecting it to have changed too.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_copy = app_code_lesson_statement_name_third();
  let word_first = app_code_lesson_statement_name_value_word();
  let word_last = app_code_lesson_statement_name_two_word();
  let box_have = app_code_container_light_blue(root);
  html_div_cycle_code(box_have, [
    "Remember, we gave cup ",
    name_copy,
    " whatever was in cup ",
    name_first,
  ]);
  app_code_lesson_cups_row_holding(box_have, [
    [word_first, name_first],
    [word_first, name_copy],
  ]);
  ("the word for what is in a cup is joined into the writing around it rather than given as a part of its own. The parts alternate between plain writing and code all the way along, so a part standing in an odd place comes out dressed as code - and only the names on the cups are code here.");
  let both = list_join_empty(["So both cups have ", word_first, " in them"]);
  html_div_cycle_code(box_have, [both]);
  let box_change = app_code_container_light_blue(root);
  let took = list_join_empty([
    "Now suppose someone took the ",
    word_first,
    " out of cup ",
  ]);
  let put = list_join_empty([" and put ", word_last, " in instead"]);
  html_div_cycle_code(box_change, [took, name_first, put]);
  app_code_lesson_cups_row_holding(box_change, [
    [word_last, name_first],
    [word_first, name_copy],
  ]);
  let still = list_join_empty([
    " still has ",
    word_first,
    " in it - nobody touched cup ",
  ]);
  html_div_cycle_code(box_change, ["Cup ", name_copy, still, name_copy]);
  let box_code = app_code_container_light_blue(root);
  let quoted_first = app_code_string_code(word_first);
  let held = js_code_let_statement(name_first, quoted_first);
  let copied = js_code_let_statement(name_copy, name_first);
  let quoted_last = app_code_string_code(word_last);
  let changed = js_code_assign_statement(name_first, quoted_last);
  let logged = js_code_console_log_statement(name_copy);
  html_div_cycle_code(box_code, [
    "In JS we fill cup ",
    name_first,
    " and then fill cup ",
    name_copy,
    " from it",
  ]);
  ("the two lines are handed over together rather than one at a time, because nothing is said between them: they are one program, and the quiz and the worked example of this same lesson have always drawn a program as one chip.");
  html_div_code_lines(box_code, [held, copied]);
  let puts = list_join_empty(["Then we put ", word_last, " in cup "]);
  html_div_cycle_code(box_code, [puts, name_first]);
  html_div_code(box_code, changed);
  html_div_cycle_code(box_code, [
    "Then we write out what is inside ",
    name_copy,
  ]);
  app_code_code_lines_writes_out(box_code, [logged], word_first);
  html_div_cycle_code(box_code, [
    "Cup ",
    name_copy,
    " was filled once, and that line changed cup ",
    name_first,
    " only",
  ]);
}
