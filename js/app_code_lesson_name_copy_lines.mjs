import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_name_mark } from "./app_code_note_name_mark.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { js_code_comment_line } from "./js_code_comment_line.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { text_empty } from "./text_empty.mjs";
export function app_code_lesson_name_copy_lines(name_from, name_to) {
  arguments_assert(arguments, 2);
  ("the end of a program that copies one name into another, notes and all: the copying line with the notes saying what it does and what it does not do, then the line writing out the copy");
  ("Written once for every lesson that copies a name, so the notes a learner reads above the copying line are the same words wherever they meet it. The line that fills the cup says in the same breath that nothing leaves the cup it was filled from, because that is the one thing a learner will doubt.");
  ("The names are marked in the notes, and the marks are what the code box reads its colours from.");
  let from_named = app_code_note_name_mark(name_from);
  let to_named = app_code_note_name_mark(name_to);
  let words_copy = list_join_empty([
    "We make ",
    to_named,
    " and fill it with whatever is in ",
    from_named,
  ]);
  let note_copy = js_code_comment_line(words_copy);
  let words_kept = list_join_empty([
    "This does not remove it from ",
    from_named,
  ]);
  let note_kept = js_code_comment_line(words_kept);
  let copied = js_code_let_statement(name_to, name_from);
  let words_logged = list_join_empty([
    "We write out what is inside ",
    to_named,
  ]);
  let note_logged = js_code_comment_line(words_logged);
  let logged = js_code_console_log_statement(name_to);
  let blank = text_empty();
  let lines = [note_copy, note_kept, copied, blank, note_logged, logged];
  return lines;
}
