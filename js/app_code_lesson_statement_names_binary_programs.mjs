import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_names_binary_programs(symbol, pairs) {
  arguments_assert(arguments, 2);
  ("the programs a screen of a lesson about one symbol between two names asks about: each gives the two values of one pair the two names, then writes out what the symbol makes of the two names");
  ("The symbol is the only thing handed in besides the values. Every lesson built on this shows the same three lines with the same two names in the same places, so a learner moving from one of these lessons to the next is looking at one changed character - the thing each lesson is about.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  function program_of(pair) {
    "the three lines that give one pair's two values the two names and write out the symbol between the names";
    let first = list_first(pair);
    let last = list_last(pair);
    let held_first = js_code_let_statement(name_first, first);
    let held_last = js_code_let_statement(name_last, last);
    let asked = js_code_binary_spaced_nb(name_first, symbol, name_last);
    let logged = js_code_console_log_statement(asked);
    let lines = [held_first, held_last, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(pairs, program_of);
  return codes;
}
