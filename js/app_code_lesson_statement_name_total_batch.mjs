import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_name_sum_number_pairs } from "./app_code_lesson_statement_name_sum_number_pairs.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_statement_name_total_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: each gives two numbers two names, gives a third name what those two add up to, and writes the third one out");
  ("The same four pairs of numbers the lesson before this one asks about, because the two lessons differ in one line and not in their arithmetic. A learner who has just answered these four sums meets them again with the total kept under a name, so the only thing that can be new in the answer is the line this lesson added.");
  ("So the three wrong answers a question offers are the other three questions' answers. Nothing has to be invented to fill the buttons, and every wrong answer is a total that some sum on this lesson really does come to.");
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let name_total = app_code_lesson_statement_name_third();
  let plus = js_operator_plus_symbol();
  let pairs = app_code_lesson_statement_name_sum_number_pairs();
  function program_of(pair) {
    "the four lines that give two numbers two names, give a third name what the two add up to, and write out what the third one holds";
    let first = list_first(pair);
    let last = list_last(pair);
    let held_first = js_code_let_statement(name_first, first);
    let held_last = js_code_let_statement(name_last, last);
    let summed = js_code_binary_spaced_nb(name_first, plus, name_last);
    let held_total = js_code_let_statement(name_total, summed);
    let logged = js_code_console_log_statement(name_total);
    let lines = [held_first, held_last, held_total, logged];
    let code = list_join_newline(lines);
    return code;
  }
  let codes = list_map(pairs, program_of);
  return codes;
}
