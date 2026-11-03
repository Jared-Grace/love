import { arguments_assert } from "./arguments_assert.mjs";
import { js_strings } from "./js_strings.mjs";
import { js_parse } from "./js_parse.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_lesson_statement_name_again_last_backwards_decoys(
  question,
  answer,
) {
  arguments_assert(arguments, 2);
  ("the wrong programs when a name is written out only at the end: the same two words the other way round, the writing-out before the change, and a writing-out on each side of it");
  ("Every one holds the same two words as the right program, so the only way to tell them apart is to follow the lines in order and see what the name holds when it is written out.");
  let ast = js_parse(answer);
  let words = js_strings(ast);
  let word = list_first(words);
  let first = app_code_string_code(word);
  let word2 = list_last(words);
  let last = app_code_string_code(word2);
  let name = app_code_lesson_statement_name_value_name();
  let logged = js_code_console_log_statement(name);
  let held = js_code_let_statement(name, first);
  let again = js_code_assign_statement(name, last);
  let swapped_held = js_code_let_statement(name, last);
  let swapped_again = js_code_assign_statement(name, first);
  let programs = [
    [swapped_held, swapped_again, logged],
    [held, logged, again],
    [held, logged, again, logged],
  ];
  let found = list_map(programs, list_join_newline);
  return found;
}
