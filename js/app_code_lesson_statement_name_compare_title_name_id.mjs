import { app_code_lesson_statement_names_binary_title_name_id } from "./app_code_lesson_statement_names_binary_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
export function app_code_lesson_statement_name_compare_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: comparing what two names hold, the eleventh Statements lesson, followed by the line that does it");
  ("The line shown is the whole lesson, and the one thing that makes it this line rather than the sixth lesson's is the symbol in the middle. The names stand in the same two places; only what is being asked of them has changed.");
  ("The less than symbol rather than any of the other five, because it is the comparison a learner met first and the one every later comparison lesson was written against.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "comparing what two names hold";
  let smaller_than = js_operator_less_than_symbol();
  let built = app_code_lesson_statement_names_binary_title_name_id(
    words,
    smaller_than,
  );
  return built;
}
