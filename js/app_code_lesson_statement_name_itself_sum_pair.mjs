import { app_code_lesson_statement_title_code_paint_get } from "./app_code_lesson_statement_title_code_paint_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_itself_sum_above } from "./app_code_lesson_statement_name_itself_sum_above.mjs";
import { app_code_lesson_statement_name_itself_sum_batch } from "./app_code_lesson_statement_name_itself_sum_batch.mjs";
import { app_code_lesson_statement_name_itself_sum_title_code } from "./app_code_lesson_statement_name_itself_sum_title_code.mjs";
export function app_code_lesson_statement_name_itself_sum_pair() {
  arguments_assert(arguments, 0);
  ("the pair on adding to what a name holds: its programs, its title line, and what each of its two lessons is called");
  ("What makes the title line this pair's is the name standing on both sides of the equals. Every title before it has a name on the left and something else on the right; here the same letter is in both places, which is the one thing the pair is about and is visible from the home list without a word of explanation.");
  ("No let, because the name already exists - the line before it is what made it. That is the line of the lesson that gives a name a new value, met again with a sum on the right of it.");
  let code = app_code_lesson_statement_name_itself_sum_title_code();
  let pair = {
    above: app_code_lesson_statement_name_itself_sum_above,
    batch: app_code_lesson_statement_name_itself_sum_batch,
    fragment: app_code_lesson_statement_title_code_paint_get(code),
    words: "Adding to what a name holds",
    words_last: "Adding to a name, last value only",
    decoys_last: null,
  };
  return pair;
}
