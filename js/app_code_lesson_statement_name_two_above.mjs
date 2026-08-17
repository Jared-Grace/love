import { js_console_log_name } from "./js_console_log_name.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_semicolon } from "./js_code_semicolon.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_span_text_highlight } from "./app_code_span_text_highlight.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_span_text_code_highlight } from "./app_code_span_text_code_highlight.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_cup } from "./app_code_cup.mjs";
import { app_code_cups_row } from "./app_code_cups_row.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_lesson_statement_name_two_word } from "./app_code_lesson_statement_name_two_word.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_value_line } from "./app_code_value_line.mjs";
import { app_code_writes_out_line } from "./app_code_writes_out_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_grape } from "./emoji_grape.mjs";
import { emoji_olive } from "./emoji_olive.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
export function app_code_lesson_statement_name_two_above(root) {
  arguments_assert(arguments, 1);
  ("the boxes read before the first question: two cups standing side by side with different things in them, being asked about one at a time, and the same thing written as code");
  ("Two cups rather than one, drawn next to each other rather than one under the other, because a picture read downwards says what happened next and this has to say what is standing there at the same time.");
  ("They hold different things, and the things are pictures rather than words. Two cups holding two words would put four words on the screen and a learner would be sorting words; two cups holding two fruits can be told apart at a glance, so the only thing left to work out is which cup was asked about.");
  ("Both cups are asked about, in turn, and each answer is the other cup's wrong answer. That is the shape of every question that follows, said first in a story where nobody can get it wrong.");
  let names = app_code_lesson_statement_name_value_names();
  let name_first = list_first(names);
  let name_last = list_last(names);
  let word_first = app_code_lesson_statement_name_value_word();
  let word_last = app_code_lesson_statement_name_two_word();
  let grape = emoji_grape();
  let olive = emoji_olive();
  let box_two = app_code_container_light_blue(root);
  html_div_cycle_code(box_two, ["You can have more than one cup"]);
  html_div_cycle_code(box_two, [
    "Suppose you had two, one called ",
    name_first,
    " and one called ",
    name_last,
  ]);
  let row = app_code_cups_row(box_two);
  app_code_cup(row, grape, name_first);
  app_code_cup(row, olive, name_last);
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
  html_div_code(box_code, held_first);
  html_div_code(box_code, held_last);
  html_div_cycle_code(box_code, [
    "Then we write out whatever is inside the cup called ",
    name_last,
  ]);
  html_div_code(box_code, logged);
  app_code_writes_out_line(box_code, word_last);
  ("the last box says which of the two names comes out, and says it by colour rather than by words: the word inside and the name b are given the same coloured tile, a line apart, so that the English and the code are seen to be the same statement twice");
  ("The line of code is broken into three pieces for that. Whole, it is one dark chip and the name in the middle of it cannot be coloured differently from the brackets around it - which is exactly the difference being pointed at. Split, the middle piece can be the highlighted one and the two outer pieces stay the code they always were.");
  ("Then the cup that does not come out is named, and the reason is given in the same three pieces: a is not one of them. A learner who reads only the words has been told; a learner who reads only the colours has been told the same thing.");
  let box_care = app_code_container_light_blue(root);
  let log_name = js_console_log_name();
  let paren_left = js_code_parenthesis_left();
  let paren_right = js_code_parenthesis_right();
  let semicolon = js_code_semicolon();
  let opened = list_join_empty([log_name, paren_left, " "]);
  let closed = list_join_empty([" ", paren_right, semicolon]);
  let parens = list_join_empty([paren_left, " ", paren_right]);
  let line_only = html_div(box_care);
  html_span_text(line_only, "Only the name ");
  app_code_span_text_highlight(line_only, "inside");
  html_span_text(line_only, " the parenthesis ");
  html_span_text_code_dark(line_only, parens);
  html_span_text(line_only, " is written out:");
  let line_call = html_div(box_care);
  html_span_text_code_dark(line_call, opened);
  app_code_span_text_code_highlight(line_call, name_last);
  html_span_text_code_dark(line_call, closed);
  let line_other = html_div(box_care);
  html_span_text(line_other, "The other cup ");
  html_span_text_code_dark(line_other, name_first);
  html_span_text(
    line_other,
    " is still there, and is not written out because ",
  );
  html_span_text_code_dark(line_other, name_first);
  html_span_text(line_other, " is not ");
  app_code_span_text_highlight(line_other, "inside");
  html_span_text(line_other, " ");
  html_span_text_code_dark(line_other, opened);
  html_span_text(line_other, " and ");
  html_span_text_code_dark(line_other, closed);
}
