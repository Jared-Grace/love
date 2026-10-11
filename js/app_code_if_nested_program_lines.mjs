import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_code_if_nested_program_lines(values, words) {
  arguments_assert(arguments, 2);
  ("let a = first value; let b = second value; if (a) { console.log(first word); if (b) { console.log(second word); } } console.log(third word);");
  let value = list_get(values, 0);
  let setup_a = js_code_let_json_statement("a", value);
  let value2 = list_get(values, 1);
  let setup_b = js_code_let_json_statement("b", value2);
  let word = list_get(words, 0);
  let statement = app_code_word_console_log_statement(word);
  let word2 = list_get(words, 1);
  let statement3 = app_code_word_console_log_statement(word2);
  let inner = js_code_if_lines_multiple("b", [statement3]);
  let outer_insides = list_concat([statement], inner);
  let outer = js_code_if_lines_multiple("a", outer_insides);
  let word3 = list_get(words, 2);
  let statement4 = app_code_word_console_log_statement(word3);
  let lines = list_concat_multiple([[setup_a, setup_b], outer, [statement4]]);
  return lines;
}
