import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { app_code_lesson_statement_name_itself_step_title_code } from "./app_code_lesson_statement_name_itself_step_title_code.mjs";
import { app_code_lesson_statement_title_code_times_paint_get } from "./app_code_lesson_statement_title_code_times_paint_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_count_above } from "./app_code_lesson_statement_name_count_above.mjs";
import { app_code_lesson_statement_name_count_batch } from "./app_code_lesson_statement_name_count_batch.mjs";
export function app_code_lesson_statement_name_count_pair() {
  arguments_assert(arguments, 0);
  ("the pair on counting with a name: its programs, its title lines, and what each of its two lessons is called");
  ("The title shows the line with (x2) after it, because the line on its own is the pair before this one. The line alone would name that pair again; saying it runs twice is the only thing this pair adds, and a learner who has read the screen before recognises the difference at a glance.");
  let plus = js_operator_plus_symbol();
  let code = app_code_lesson_statement_name_itself_step_title_code(plus);
  let pair = {
    above: app_code_lesson_statement_name_count_above,
    batch: app_code_lesson_statement_name_count_batch,
    fragment: app_code_lesson_statement_title_code_times_paint_get(code, 2),
    words: "Counting with a name",
    words_last: "Counting, last value only",
    decoys_last: null,
  };
  return pair;
}
