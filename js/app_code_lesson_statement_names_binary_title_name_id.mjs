import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
export function app_code_lesson_statement_names_binary_title_name_id(
  words,
  symbol,
) {
  "$plain words";
  "$plain symbol";
  "A home title saying these words, followed by the line that prints the two lesson names with this symbol between them.";
  "Two lessons show that same line and differ by one character in the middle of it - one adds what the two names hold, the other asks which of them is smaller. The names stand in the same two places in both; only what is being asked of them has changed, and asking it is the one thing handed in here.";
  "The words are handed in beside the symbol rather than worked out from it, because what a title says is written for a learner and not derived from a piece of punctuation.";
  arguments_assert(arguments, 2);
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let asked = js_code_binary(name_first, symbol, name_last);
  let code = js_code_console_log_statement(asked);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
