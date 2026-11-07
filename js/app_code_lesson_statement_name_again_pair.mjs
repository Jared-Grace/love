import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_again_title_code } from "./app_code_lesson_statement_name_again_title_code.mjs";
import { app_learn_js_lesson_statement_name_again_above } from "./app_learn_js_lesson_statement_name_again_above.mjs";
import { app_learn_js_lesson_statement_name_again_batch } from "./app_learn_js_lesson_statement_name_again_batch.mjs";
import { app_code_lesson_statement_title_code_dots_paint_get } from "./app_code_lesson_statement_title_code_dots_paint_get.mjs";
import { app_learn_js_lesson_decoy_code_pieces } from "./app_learn_js_lesson_decoy_code_pieces.mjs";
import { app_learn_js_lesson_statement_name_again_backwards_decoys } from "./app_learn_js_lesson_statement_name_again_backwards_decoys.mjs";
import { app_learn_js_lesson_statement_name_again_last_backwards_decoys } from "./app_learn_js_lesson_statement_name_again_last_backwards_decoys.mjs";
export function app_code_lesson_statement_name_again_pair() {
  arguments_assert(arguments, 0);
  ("the pair on giving a name a new value: its programs, its title line, and the words both its lessons are called by");
  ("The title line is the whole lesson, and it is a line a learner has not seen: the same line that first gives a value a name, with the let taken off. Shown in the title, the difference between the two is one word, seen before the lesson is opened. The value is painted as dots, a place to fill in.");
  ("The wrong answers of the lesson written out only at the end are made from what the program holds, so the word that was replaced is always among them. Reading backwards both lessons offer programs holding the same two words, so no button can be thrown out for holding a word the code does not.");
  let code = app_code_lesson_statement_name_again_title_code();
  let pair = {
    above: app_learn_js_lesson_statement_name_again_above,
    batch: app_learn_js_lesson_statement_name_again_batch,
    fragment: app_code_lesson_statement_title_code_dots_paint_get(code),
    words: "Giving a name a new value",
    decoys_last: app_learn_js_lesson_decoy_code_pieces,
    backwards_decoys_first:
      app_learn_js_lesson_statement_name_again_backwards_decoys,
    backwards_decoys_last:
      app_learn_js_lesson_statement_name_again_last_backwards_decoys,
  };
  return pair;
}
