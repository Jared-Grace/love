import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_statement } from "./js_code_assign_statement.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_statement_name_one_more_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: giving a name one more than it holds, the ninth Statements lesson, followed by the line that does it");
  ("The line shown is the whole lesson. The title before this one has the same name on both sides of the equals with another name beside it; here that other name is a written 1, which is the only difference between the two lines and the only thing this lesson adds.");
  ("The number is written out rather than stood in for. A stand-in would say the line works for any number, which is true and is not what this screen is about - it is about the one number that makes a name count.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "giving a name one more than it holds";
  let name = app_code_lesson_statement_name_value_name();
  let plus = js_operator_plus_symbol();
  let more = js_code_binary_spaced_nb(name, plus, 1);
  let code = js_code_assign_statement(name, more);
  let built = app_code_lesson_statement_title_name_id(words, code);
  return built;
}
