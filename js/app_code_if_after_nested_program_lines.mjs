import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_code_if_after_nested_program_lines(values, words) {
  arguments_assert(arguments, 2);
  ("let a = first value; let b = second value; if (a) { console.log(first word); if (b) { console.log(second word); } } if (b) { console.log(third word); } console.log(fourth word);");
  let value_a = list_get(values, 0);
  let setup_a = js_code_let_json_statement("a", value_a);
  let value_b = list_get(values, 1);
  let setup_b = js_code_let_json_statement("b", value_b);
  let item = list_get(words, 0);
  let statement = app_code_word_console_log_statement(item);
  let item2 = list_get(words, 1);
  let statement3 = app_code_word_console_log_statement(item2);
  let inner = js_code_if_lines("b", statement3);
  let outer_insides = list_concat([statement], inner);
  let outer = js_code_if_lines_multiple("a", outer_insides);
  let item3 = list_get(words, 2);
  let statement4 = app_code_word_console_log_statement(item3);
  let after = js_code_if_lines("b", statement4);
  let item4 = list_get(words, 3);
  let statement5 = app_code_word_console_log_statement(item4);
  let lines = list_concat_multiple([
    [setup_a, setup_b],
    outer,
    after,
    [statement5],
  ]);
  return lines;
}
