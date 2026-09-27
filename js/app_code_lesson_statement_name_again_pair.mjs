import { app_code_lesson_statement_title_code_dots_paint_get } from "./app_code_lesson_statement_title_code_dots_paint_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_again_above } from "./app_code_lesson_statement_name_again_above.mjs";
import { app_code_lesson_statement_name_again_batch } from "./app_code_lesson_statement_name_again_batch.mjs";
import { app_code_lesson_statement_name_again_title_code } from "./app_code_lesson_statement_name_again_title_code.mjs";
import { app_code_lesson_decoy_code_words } from "./app_code_lesson_decoy_code_words.mjs";
export function app_code_lesson_statement_name_again_pair() {
  arguments_assert(arguments, 0);
  ("the pair on giving a name a new value: its programs, its title line, and the words both its lessons are called by");
  ("The title line is the whole lesson, and it is a line a learner has not seen: the same line that first gives a value a name, with the let taken off. Shown in the title, the difference between the two is one word, seen before the lesson is opened. The value is painted as dots, a place to fill in.");
  ("The wrong answers of the lesson written out only at the end are the words the program holds, so the word that was replaced is always among them.");
  let code = app_code_lesson_statement_name_again_title_code();
  let pair = {
    above: app_code_lesson_statement_name_again_above,
    batch: app_code_lesson_statement_name_again_batch,
    fragment: app_code_lesson_statement_title_code_dots_paint_get(code),
    words: "Giving a name a new value",
    decoys_last: app_code_lesson_decoy_code_words,
  };
  return pair;
}
