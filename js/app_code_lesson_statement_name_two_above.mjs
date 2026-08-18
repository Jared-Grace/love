import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_cups_row_holding } from "./app_code_lesson_cups_row_holding.mjs";
import { app_code_lesson_inside_parenthesis_box } from "./app_code_lesson_inside_parenthesis_box.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_lesson_statement_name_two_word } from "./app_code_lesson_statement_name_two_word.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_value_line } from "./app_code_value_line.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_statement_name_two_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: two cups standing side by side with different things in them, being asked about one at a time, and the same thing written as code");
  ("Two cups rather than one, drawn next to each other rather than one under the other, because a picture read downwards says what happened next and this has to say what is standing there at the same time.");
  ("They hold different things, and the things are pictures rather than words. Two cups holding two words would put four words on the screen and a learner would be sorting words; two cups holding two fruits can be told apart at a glance, so the only thing left to work out is which cup was asked about.");
  ("Both cups are asked about, in turn, and each answer is the other cup's wrong answer. That is the shape of every question that follows, said first in a story where nobody can get it wrong.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let word_first = app_code_lesson_statement_name_value_word();
  let word_last = app_code_lesson_statement_name_two_word();
  let box_two = app_code_container_light_blue(root);
  html_div_cycle_code(box_two, ["You can have more than one cup"]);
  html_div_cycle_code(box_two, [
    "Suppose you had two, one called ",
    name_first,
    " and one called ",
    name_last,
  ]);
  app_code_lesson_cups_row_holding(box_two, [
    [word_first, name_first],
    [word_last, name_last],
  ]);
  ("asked one at a time, and answered one at a time, because the name is what picks which of the two is being talked about and that is the only new thing on this screen");
  let box_ask = app_code_container_light_blue(root);
  html_div_cycle_code(box_ask, [
    "If someone asked what is inside the cup called ",
    name_first,
  ]);
  app_code_value_line(box_ask, "You could answer: ", word_first);
  html_div_cycle_code(box_ask, [
    "And if they asked what is inside the cup called ",
    name_last,
  ]);
  app_code_value_line(box_ask, "You could answer: ", word_last);
  html_div_cycle_code(box_ask, ["The name says which cup they mean"]);
  ("the code box makes both cups first and then asks for one of them, in that order, because both lines have to have happened before either name means anything");
  let quoted_first = app_code_string_code(word_first);
  let quoted_last = app_code_string_code(word_last);
  let held_first = js_code_let_statement(name_first, quoted_first);
  let held_last = js_code_let_statement(name_last, quoted_last);
  let logged = js_code_console_log_statement(name_last);
  let box_code = app_code_container_light_blue(root);
  html_div_cycle_code(box_code, ["In JS we make both cups like this"]);
  ("the two lines are handed over together rather than one at a time, because nothing is said between them: they are one program, and the quiz and the worked example of this same lesson have always drawn a program as one chip.");
  html_div_code_lines(box_code, [held_first, held_last]);
  html_div_cycle_code(box_code, [
    "Then we write out whatever is inside the cup called ",
    name_last,
  ]);
  app_code_code_lines_writes_out(box_code, [logged], word_last);
  ("the last box says which of the two names comes out, and says it by colour rather than by words - the name written out and the word inside wear the same coloured tile a line apart");
  app_code_lesson_inside_parenthesis_box(root, name_last, name_first);
}
