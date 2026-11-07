import { arguments_assert } from "./arguments_assert.mjs";
import { js_strings } from "./js_strings.mjs";
import { js_parse } from "./js_parse.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { app_learn_js_lesson_statement_name_value_name } from "./app_learn_js_lesson_statement_name_value_name.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_lesson_statement_name_again_backwards_decoys(
  question,
  answer,
) {
  arguments_assert(arguments, 2);
  ("the wrong programs when a name is written out after each change: the same two words the other way round, both written out after the last change, and both written out before it");
  ("Every one holds the same two words as the right program, so the only way to tell them apart is to follow the lines in order, which is what this lesson is about.");
  let ast = js_parse(answer);
  let words = js_strings(ast);
  let word = list_first(words);
  let first = app_code_string_code(word);
  let word2 = list_last(words);
  let last = app_code_string_code(word2);
  let name = app_learn_js_lesson_statement_name_value_name();
  let logged = js_code_console_log_statement(name);
  let held = js_code_let_statement(name, first);
  let again = js_code_assign_statement(name, last);
  let swapped_held = js_code_let_statement(name, last);
  let swapped_again = js_code_assign_statement(name, first);
  let programs = [
    [swapped_held, logged, swapped_again, logged],
    [held, again, logged, logged],
    [held, logged, logged, again],
  ];
  let found = list_map(programs, list_join_newline);
  return found;
}
