import { list_join_newline } from "./list_join_newline.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
export function app_code_lesson_statement_name_last_title_name_id(
  title_fn,
  words,
  code_change,
) {
  arguments_assert(arguments, 3);
  ("the home title of a lesson that writes a name out only at the end: the change the lesson before teaches, then the one writing-out");
  ("The human asked for each title's code to be its own: five of these once all showed console.log(a); alone, which tells a learner nothing about which lesson it is. The change line makes it this lesson's, and the writing-out after it says the name is written out once, at the end, which is the difference from the lesson before, whose title shows the change alone.");
  ("The painter is handed in because the lesson on giving a name a new value paints its value as dots, and the title after it has to look the same where it is the same.");
  let name = app_code_lesson_statement_name_value_name();
  let logged = js_code_console_log_statement(name);
  let code = list_join_newline([code_change, logged]);
  let built = title_fn(words, code);
  return built;
}
