import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_name_itself_step_title_name_id } from "./app_code_lesson_statement_name_itself_step_title_name_id.mjs";
export function app_code_lesson_statement_name_one_more_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: adding one to a name, followed by the line that does it");
  ("The line shown is the whole lesson. The title before this one has the same name on both sides of the equals with another name beside it; here that other name is a written 1, which is the only difference between the two lines and the only thing this lesson adds.");
  ("Only what is painted changes; the id is built from the words below.");
  let words = "Adding one to a name";
  let plus = js_operator_plus_symbol();
  let built = app_code_lesson_statement_name_itself_step_title_name_id(
    words,
    plus,
  );
  return built;
}
