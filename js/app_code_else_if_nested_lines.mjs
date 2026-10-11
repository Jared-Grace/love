import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_else_if_setups_of } from "./app_code_else_if_setups_of.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_code_else_if_nested_lines(values, words) {
  arguments_assert(arguments, 2);
  ("the same program written with an if inside an else: if (a) { ... } else { if (b) { ... } }");
  let setups = app_code_else_if_setups_of(values);
  let item = list_get(words, 0);
  let statement = app_code_word_console_log_statement(item);
  let item5 = list_get(words, 1);
  let statement5 = app_code_word_console_log_statement(item5);
  let inner = js_code_if_lines_multiple("b", [statement5]);
  let outer = js_code_if_else_lines_multiple("a", [statement], inner);
  let item6 = list_get(words, 2);
  let statement6 = app_code_word_console_log_statement(item6);
  let lines = list_concat_multiple([setups, outer, [statement6]]);
  return lines;
}
