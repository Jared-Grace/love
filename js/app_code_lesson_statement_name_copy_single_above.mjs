import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { app_code_lesson_statement_name_two_word } from "./app_code_lesson_statement_name_two_word.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_two } from "./app_code_lesson_statement_name_two.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_note_cycle_code } from "./app_code_note_cycle_code.mjs";
import { app_code_span_code_dark_names } from "./app_code_span_code_dark_names.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_empty } from "./text_empty.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { app_code_note_div_cycle_code } from "./app_code_note_div_cycle_code.mjs";
import { app_code_lesson_cups_row_holding } from "./app_code_lesson_cups_row_holding.mjs";
import { app_code_js_written_that_text } from "./app_code_js_written_that_text.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_note_name_mark } from "./app_code_note_name_mark.mjs";
import { js_code_comment_line } from "./js_code_comment_line.mjs";
import { app_code_lesson_name_no_quotes_box } from "./app_code_lesson_name_no_quotes_box.mjs";
export function app_code_lesson_statement_name_copy_single_above(
  root,
  context,
) {
  arguments_assert(arguments, 2);
  ("the boxes read before the first question: the two-names program and the one change this lesson makes to it, then the cups, then the cup story written as a program, then what the missing quote marks do");
  ("The reminder is the two-names lesson because this line is that one with a single change - the second name is given the first name instead of a word. Both programs are three lines, so nothing is added but the one change.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let word_first = app_code_lesson_statement_name_value_word();
  let word_last = app_code_lesson_statement_name_two_word();
  let quoted_first = app_code_string_code(word_first);
  let quoted_last = app_code_string_code(word_last);
  let held_first = js_code_let_statement(name_first, quoted_first);
  let held_last = js_code_let_statement(name_last, quoted_last);
  let copied = js_code_let_statement(name_last, name_first);
  let logged = js_code_console_log_statement(name_last);
  let box_two = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    box_two,
    context,
    app_code_lesson_statement_name_two,
    ["two names can hold two words (", held_last, "):"],
  );
  app_code_code_lines_writes_out(
    box_two,
    [held_first, held_last, logged],
    word_last,
  );
  let names = [name_first, name_last];
  ("THE COMPARISON WITH THE LINE LEARNT BEFORE STANDS IN THE REMINDER'S OWN BOX, under the program it compares against. Standing between the cups and the program that tells them, it put a word the cups never hold in front of the code, and the reader had to step over it to join the picture to its code, at the human's request");
  ("the two lines of code in the sentence are painted with the names inside them coloured too, the way the box about quote marks below paints its lines, because a line of code is not itself a name and so the writer that colours a name would leave it all white, at the human's request");
  let said = html_div(box_two);
  app_code_note_cycle_code(
    said,
    [
      "A name (",
      name_last,
      ") can also hold what another name (",
      name_first,
      ") holds (",
    ],
    names,
  );
  app_code_span_code_dark_names(said, copied, names);
  html_span_text(said, " instead of ");
  app_code_span_code_dark_names(said, held_last, names);
  html_span_text(said, ")");
  ("the cup story comes before the code, the way the lesson that copies into a third cup tells it, because this is the first lesson where one name is given another name - so it is where a learner first wonders whether the first name loses its word. The story never pours: someone looks inside one cup and fetches more of the same, which is what the code does, at the human's request");
  let nothing = text_empty();
  let cup_first = [word_first, name_first];
  let box_cups = app_code_container_light_blue(root);
  let has_first = list_join_empty([" has ", word_first, " and cup "]);
  app_code_note_div_cycle_code(
    box_cups,
    ["Suppose cup ", name_first, has_first, name_last, " is empty"],
    names,
  );
  app_code_lesson_cups_row_holding(
    box_cups,
    [cup_first, [nothing, name_last]],
    names,
  );
  app_code_note_div_cycle_code(
    box_cups,
    [
      "Suppose you asked someone to look inside cup ",
      name_first,
      ", and whatever was in cup ",
      name_first,
      ", also put some in cup ",
      name_last,
    ],
    names,
  );
  let found = list_join_empty([
    " has ",
    word_first,
    ", so suppose they found some more ",
    word_first,
    " and put those ",
    word_first,
    " in cup ",
  ]);
  app_code_note_div_cycle_code(
    box_cups,
    ["Cup ", name_first, found, name_last],
    names,
  );
  app_code_lesson_cups_row_holding(
    box_cups,
    [cup_first, [word_first, name_last]],
    names,
  );
  let removed = list_join_empty(["No ", word_first, " were removed from cup "]);
  let other = list_join_empty([
    ": the person found some other ",
    word_first,
    " to put in cup ",
  ]);
  app_code_note_div_cycle_code(
    box_cups,
    [removed, name_first, other, name_last],
    names,
  );
  let box_copy = app_code_container_light_blue(root);
  ("the names in this box wear the colours the cups above and the box below give them, at the human's request - the sentence through the writer that colours a name, and the program through notes that mark each name, the way the lesson that copies into a third cup writes its program, because the notes are what the code box reads its colours from");
  ("the program box directly under the cups opens with the line the lesson that copies into a third cup opens its program with, and says nothing else, so the program reads as the cup story written in JS - every word in it is one the cups hold");
  let written = app_code_js_written_that_text();
  html_div_cycle_code(box_copy, [written]);
  let first_named = app_code_note_name_mark(name_first);
  let last_named = app_code_note_name_mark(name_last);
  let words_made = list_join_empty(["We make cup ", first_named]);
  let note_made = js_code_comment_line(words_made);
  let words_copy = list_join_empty([
    "We make ",
    last_named,
    " and fill it with whatever is in ",
    first_named,
  ]);
  let note_copy = js_code_comment_line(words_copy);
  let words_kept = list_join_empty([
    "This does not remove it from ",
    first_named,
  ]);
  let note_kept = js_code_comment_line(words_kept);
  let words_logged = list_join_empty([
    "We write out what is inside ",
    last_named,
  ]);
  let note_logged = js_code_comment_line(words_logged);
  let blank = text_empty();
  app_code_code_lines_writes_out(
    box_copy,
    [
      note_made,
      held_first,
      blank,
      note_copy,
      note_kept,
      copied,
      blank,
      note_logged,
      logged,
    ],
    word_first,
  );
  app_code_lesson_name_no_quotes_box(
    root,
    name_first,
    name_last,
    word_first,
    names,
  );
}
