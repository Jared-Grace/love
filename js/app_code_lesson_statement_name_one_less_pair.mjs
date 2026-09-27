import { app_code_lesson_statement_title_code_paint_get } from "./app_code_lesson_statement_title_code_paint_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_statement_name_one_less_above } from "./app_code_lesson_statement_name_one_less_above.mjs";
import { app_code_lesson_statement_name_one_less_batch } from "./app_code_lesson_statement_name_one_less_batch.mjs";
import { app_code_lesson_statement_name_itself_step_title_code } from "./app_code_lesson_statement_name_itself_step_title_code.mjs";
export function app_code_lesson_statement_name_one_less_pair() {
  arguments_assert(arguments, 0);
  ("the pair on taking one from a name: its programs, its title line, and the words both its lessons are called by");
  let minus = js_operator_minus_symbol();
  let code = app_code_lesson_statement_name_itself_step_title_code(minus);
  let pair = {
    above: app_code_lesson_statement_name_one_less_above,
    batch: app_code_lesson_statement_name_one_less_batch,
    fragment: app_code_lesson_statement_title_code_paint_get(code),
    words: "Taking one from a name",
    decoys_last: null,
  };
  return pair;
}
