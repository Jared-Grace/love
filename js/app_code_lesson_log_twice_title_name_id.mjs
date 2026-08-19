import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_empty } from "./list_join_empty.mjs";

export function app_code_lesson_log_twice_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: writing out two things, followed by the two lines that do it");
  (
    "The line shown is two lines, which is the whole lesson. Every title above this one shows one line, so the thing that makes this one different is visible in the title before it is read - there are two of them."
  );
  (
    "Plain numbers rather than the sums the questions ask about. A title is recognised rather than worked out, and a sum in it would be asking the reader of a list to add before they know which lesson they are looking at."
  );
  (
    "The two lines are spelled with nothing between them, the way every title in this category spells a line compactly. A title sits beside a number on a list of a hundred and twenty and a break in it would cost a whole row."
  );
  ("Only what is painted changes; the id is built from the words below.");
  let words = "writing out two things";
  let first = js_code_console_log_statement(7);
  let last = js_code_console_log_statement(8);
  let code = list_join_empty([first, last]);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
