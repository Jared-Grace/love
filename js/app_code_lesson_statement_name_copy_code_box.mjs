import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_note_name_mark } from "./app_code_note_name_mark.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { js_code_comment_line } from "./js_code_comment_line.mjs";
import { text_empty } from "./text_empty.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
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
  ("A BOX THAT SHOWS WHAT A PROGRAM WRITES OUT SHOWS THE WHOLE PROGRAM. The word written out underneath is a claim, and a claim about what a program writes out is only checkable against a program that runs on its own - and this screen's whole point is which cup the copied word came from, which only the copying line says.");
  ("THE EXPLANATION IS WRITTEN AS NOTES INSIDE THE PROGRAM. Each line of English stands directly above the line it is about, so nothing has to be matched up by eye, and no line is drawn twice. Said as writing outside the box, each line had to be shown twice over - once where it was being explained and once inside the program - and the three lines of this screen came out six.");
  ("Notes rather than writing, because a note may be as long as it needs to be and costs nothing: the machine does not read it, the painter of this chip draws every note dimmer than the code around it, and this course taught notes four lessons before this one. Two slashes only - the other kind of note is not taught anywhere in this course, and a screen is not the place to introduce one.");
  ("A blank line between each note and the group before it, because the notes are what would otherwise have been separate sentences with code between them, and the blank line is what is left of that break.");
  ("A NAME STANDING IN A SENTENCE IS MARKED. The first name a learner meets is a, which is also an English word, so 'this does not remove it from a' reads as a sentence that stops before its last word. The mark says the letter is the name of a cup and not the start of a phrase, and it says it in writing, so the reader who cannot tell two colours apart is told the same thing as everybody else.");
  ("What the mark is made of is not spelled here and is not this screen's to choose. Marking a name is asked for by name, and the same asking is what the painter looks for again when it comes to fade the mark and colour what it holds - so the two cannot fall out of step, and the day the course wants a different mark it is changed once for every lesson at once.");
  let first_named = app_code_note_name_mark(name_first);
  let last_named = app_code_note_name_mark(name_last);
  let copy_named = app_code_note_name_mark(name_copy);
  let words = list_join_empty([
    "We make cups ",
    first_named,
    " and ",
    last_named,
  ]);
  let note_cups = js_code_comment_line(words);
  let words2 = list_join_empty([
    "We make ",
    copy_named,
    " and fill it with whatever is in ",
    first_named,
  ]);
  let note_copy = js_code_comment_line(words2);
  let words3 = list_join_empty(["This does not remove it from ", first_named]);
  let note_kept = js_code_comment_line(words3);
  let words4 = list_join_empty(["We write out what is inside ", copy_named]);
  let note_logged = js_code_comment_line(words4);
  let blank = text_empty();
  html_div_cycle_code(box_code, ["In JS we write the same thing like this:"]);
  let lines = [
    note_cups,
    held_first,
    held_last,
    blank,
    note_copy,
    note_kept,
    copied,
    blank,
    note_logged,
    logged,
  ];
  app_code_code_lines_writes_out(box_code, lines, word_first);
  app_code_lesson_name_no_quotes_box(root, name_first, name_copy, word_first);
  return box_code;
}
