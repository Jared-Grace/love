import { app_code_tokens_rows_braces } from "./app_code_tokens_rows_braces.mjs";
import { app_code_lesson_quiz_tokens_tap } from "./app_code_lesson_quiz_tokens_tap.mjs";
export function app_code_lesson_quiz_tokens_tap_braces_only(
  answers_div,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
) {
  "tapping the tokens of a program in the order they are read, with nothing shown to follow, every pair of braces in a colour of its own, and under it only the braces tapped, in their colours; it stands where a quiz draws its answer, so it takes what every quiz there is handed";
  let rows = app_code_tokens_rows_braces();
  app_code_lesson_quiz_tokens_tap(
    answers_div,
    qa,
    on_success,
    on_wrong,
    correction_code_set,
    false,
    rows,
    true,
  );
}
