import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_token_select_variation_buildable } from "./app_code_lesson_quiz_token_select_variation_buildable.mjs";
import { app_code_lesson_quiz_token_select_chosen } from "./app_code_lesson_quiz_token_select_chosen.mjs";
export function app_code_lesson_quiz_token_select_pieces(info, qa, answer_div) {
  arguments_assert(arguments, 3);
  let r = app_code_lesson_quiz_token_select_variation_buildable(
    info,
    qa,
    answer_div,
  );
  let pieces = app_code_lesson_quiz_token_select_chosen(r);
  return pieces;
}
