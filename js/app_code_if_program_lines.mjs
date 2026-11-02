import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_if_program_lines(
  setup,
  condition,
  inside_word,
  plain_word,
  if_first,
) {
  arguments_assert(arguments, 5);
  ("a program for the if lessons: the setup lines, then an if around a line writing out one word, and a line writing out another word, with the if first or last");
  let inside = app_code_word_console_log_statement(inside_word);
  let plain = app_code_word_console_log_statement(plain_word);
  let if_lines = js_code_if_lines(condition, inside);
  if (if_first) {
    let first = list_concat(if_lines, [plain]);
    let whole = list_concat(setup, first);
    return whole;
  }
  let last = list_concat([plain], if_lines);
  let whole2 = list_concat(setup, last);
  return whole2;
}
