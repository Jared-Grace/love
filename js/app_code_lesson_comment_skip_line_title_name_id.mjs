import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_comment_prefix } from "./js_code_comment_prefix.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_comment_skip_line_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: making the computer skip a line, followed by a line that writes out with the two slashes in front of it");
  ("The line shown is the plainest line that writes out, which is the one the title before this one shows, with the slashes added. Read down the list of lessons the two titles are then the same line twice with one difference between them, which is what the screen is about.");
  ("The words say skipping rather than noting, because a learner has already met the slashes as the way to write a note; what is new is putting them in front of a line that would have done something.");
  let words = "making the computer skip a line";
  let logged = js_code_console_log_statement(7);
  let prefix = js_code_comment_prefix();
  let code = text_combine(prefix, logged);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
