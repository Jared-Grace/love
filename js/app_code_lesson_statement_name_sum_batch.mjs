import { app_code_lesson_statement_names_added } from "./app_code_lesson_statement_names_added.mjs";
import { app_code_lesson_statement_name_sum_number_pairs } from "./app_code_lesson_statement_name_sum_number_pairs.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_map } from "./list_map.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_lesson_statement_name_sum_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives two numbers two names, then writes out what those two names add up to");
  ("So the three wrong answers a question offers are the other three questions' answers. Nothing has to be invented to fill the buttons, and every wrong answer is a total that some sum on this lesson really does come to.");
  ("Which numbers a program gets is settled where the lesson after this one settles it too, because that lesson asks these same four programs with one more line on each.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let summed = app_code_lesson_statement_names_added();
  let pairs = app_code_lesson_statement_name_sum_number_pairs();
  function program_of(pair) {
    "the three lines that give two numbers two names and write out what the two names add up to";
    let first = list_first(pair);
    let last = list_last(pair);
    let held_first = js_code_let_statement(name_first, first);
    let held_last = js_code_let_statement(name_last, last);
    let logged = js_code_console_log_statement(summed);
    let lines = [held_first, held_last, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(pairs, program_of);
  return codes;
}
