import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
export function app_code_word_console_log_statement(word) {
  'console.log("word");';
  let code = app_code_string_code(word);
  let statement = js_code_console_log_statement(code);
  return statement;
}
