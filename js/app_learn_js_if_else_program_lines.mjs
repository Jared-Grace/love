import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { app_learn_js_word_console_log_statement } from "./app_learn_js_word_console_log_statement.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_if_else_lines } from "./js_code_if_else_lines.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_learn_js_if_else_program_lines(name, value, words) {
  arguments_assert(arguments, 3);
  ("let name = value; if (name) { console.log(first word); } else { console.log(second word); }");
  let setup = js_code_let_json_statement(name, value);
  let word = list_get(words, 0);
  let statement_yes = app_learn_js_word_console_log_statement(word);
  let word2 = list_get(words, 1);
  let statement_no = app_learn_js_word_console_log_statement(word2);
  let if_lines = js_code_if_else_lines(name, statement_yes, statement_no);
  let lines = list_concat([setup], if_lines);
  return lines;
}
