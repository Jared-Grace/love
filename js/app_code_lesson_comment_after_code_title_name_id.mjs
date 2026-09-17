import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_comment_line } from "./js_code_comment_line.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_comment_after_code_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: a comment after code, followed by a line that writes out with a comment after it on the same line");
  ("The title of the lesson before this one puts the slashes in front of a line, and this one puts them after code. The two titles side by side show the one thing that moved: where on the line the slashes stand.");
  ("The words after the slashes are the ones the title of the lesson that writes a comment uses, so the only new thing in this title is the code standing in front of them.");
  let words = "A comment after code";
  let logged = js_code_console_log_statement(7);
  let note = js_code_comment_line("a comment");
  let code = list_join_space([logged, note]);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
