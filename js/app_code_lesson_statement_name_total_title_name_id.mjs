import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { app_code_lesson_statement_name_two_name } from "./app_code_lesson_statement_name_two_name.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_total_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: giving a name what two names add up to, the seventh Statements lesson, followed by the line that does it");
  ("The line shown is the whole lesson, and what makes it that line is what is standing on the right of the equals - a sum, where every title before it has a value or a single name. The lesson before this one put a sum inside console.log; this one puts the same sum where a value goes.");
  ("Real names rather than a stand-in for a value, because the thing being given away is what two names add up to, and a stand-in would hide the two names the line is about.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "giving a name what two names add up to";
  let name_first = app_code_lesson_statement_name_value_name();
  let name_last = app_code_lesson_statement_name_two_name();
  let name_total = app_code_lesson_statement_name_third();
  let plus = js_operator_plus_symbol();
  let sum = js_code_binary_spaced_nb(name_first, plus, name_last);
  let code = js_code_let_statement(name_total, sum);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
