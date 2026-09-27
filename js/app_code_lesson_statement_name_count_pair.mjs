import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_count_above } from "./app_code_lesson_statement_name_count_above.mjs";
import { app_code_lesson_statement_name_count_batch } from "./app_code_lesson_statement_name_count_batch.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_statement_name_count_title_code } from "./app_code_lesson_statement_name_count_title_code.mjs";
export function app_code_lesson_statement_name_count_pair() {
  arguments_assert(arguments, 0);
  ("the pair on counting with a name: its programs, its title lines, and what each of its two lessons is called");
  ("The title shows the line twice, because the line on its own is the pair before this one. One copy would name that pair again; two copies are the only thing this pair adds, and a learner who has read the screen before recognises the difference at a glance.");
  let pair = {
    above: app_code_lesson_statement_name_count_above,
    batch: app_code_lesson_statement_name_count_batch,
    painter: app_code_lesson_statement_title_name_id,
    code: app_code_lesson_statement_name_count_title_code(),
    words: "Counting with a name",
    words_last: "Counting, last value only",
    decoys_last: null,
  };
  return pair;
}
