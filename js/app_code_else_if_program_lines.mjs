import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_else_if_setups_of } from "./app_code_else_if_setups_of.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_else_if_lines_multiple } from "./js_code_if_else_if_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_code_else_if_program_lines(values, words) {
  arguments_assert(arguments, 2);
  ("let a = first value; let b = second value; if (a) { console.log(first word); } else if (b) { console.log(second word); } console.log(third word);");
  let setups = app_code_else_if_setups_of(values);
  let item = list_get(words, 0);
  let statement = app_code_word_console_log_statement(item);
  let item2 = list_get(words, 1);
  let statement2 = app_code_word_console_log_statement(item2);
  let chain = js_code_if_else_if_lines_multiple("a", [statement], "b", [
    statement2,
  ]);
  let item3 = list_get(words, 2);
  let statement3 = app_code_word_console_log_statement(item3);
  let lines = list_concat_multiple([setups, chain, [statement3]]);
  return lines;
}
