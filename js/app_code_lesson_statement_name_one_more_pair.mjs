import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_name_one_more_above } from "./app_code_lesson_statement_name_one_more_above.mjs";
import { app_code_lesson_statement_name_one_more_batch } from "./app_code_lesson_statement_name_one_more_batch.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_statement_name_itself_step_title_code } from "./app_code_lesson_statement_name_itself_step_title_code.mjs";
export function app_code_lesson_statement_name_one_more_pair() {
  arguments_assert(arguments, 0);
  ("the pair on adding one to a name: its programs, its title line, and what each of its two lessons is called");
  ("The title line is the whole lesson. The title before it has the same name on both sides of the equals with another name beside it; here that other name is a written 1, which is the only difference between the two lines and the only thing this pair adds.");
  let plus = js_operator_plus_symbol();
  let pair = {
    above: app_code_lesson_statement_name_one_more_above,
    batch: app_code_lesson_statement_name_one_more_batch,
    painter: app_code_lesson_statement_title_name_id,
    code: app_code_lesson_statement_name_itself_step_title_code(plus),
    words: "Adding one to a name",
    words_last: "Adding one, last value only",
    decoys_last: null,
  };
  return pair;
}
