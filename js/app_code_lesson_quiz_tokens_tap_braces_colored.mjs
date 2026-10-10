import { app_code_tokens_rows_braces_all } from "./app_code_tokens_rows_braces_all.mjs";
import { app_code_lesson_quiz_tokens_tap } from "./app_code_lesson_quiz_tokens_tap.mjs";
export function app_code_lesson_quiz_tokens_tap_braces_colored(
  answers_div,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
) {
  "tapping the tokens of a program in the order they are read, with nothing shown to follow, every pair of braces in a colour of its own, and the braces tapped written down on a line of their own, in their colours, above every token tapped; it stands where a quiz draws its answer, so it takes what every quiz there is handed";
  let rows = app_code_tokens_rows_braces_all();
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
