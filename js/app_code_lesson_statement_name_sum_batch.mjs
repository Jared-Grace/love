import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_name_sum_number_pairs } from "./app_code_lesson_statement_name_sum_number_pairs.mjs";
import { app_code_lesson_statement_names_binary_programs } from "./app_code_lesson_statement_names_binary_programs.mjs";
export function app_code_lesson_statement_name_sum_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of the lesson on adding two names asks about: each gives two numbers two names, then writes out what those two names add up to");
  ("Written by the same builder every lesson that puts one symbol between two names uses, so it cannot draw a program differently from the lesson it names. Kept as a name of its own because a permission is granted to it.");
  let plus = js_operator_plus_symbol();
  let pairs = app_code_lesson_statement_name_sum_number_pairs();
  let codes = app_code_lesson_statement_names_binary_programs(plus, pairs);
  return codes;
}
