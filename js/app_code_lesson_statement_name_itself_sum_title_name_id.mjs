import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary } from "./js_code_binary.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_itself_sum_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: adding to what a name holds, the eighth Statements lesson, followed by the line that does it");
  ("The line shown is the whole lesson, and what makes it that line is the name standing on both sides of the equals. Every title before it has a name on the left and something else on the right; here the same letter is in both places, which is the one thing the lesson is about and is visible from the home list without a word of explanation.");
  ("No let, because the name already exists - the line before it is what made it. That is the fourth Statements lesson's line, met again with a sum on the right of it.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "adding to what a name holds";
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let plus = js_operator_plus_symbol();
  let sum = js_code_binary(name_first, plus, name_last);
  let code = js_code_assign_statement(name_first, sum);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
