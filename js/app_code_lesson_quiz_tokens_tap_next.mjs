import { app_code_token_any } from "./app_code_token_any.mjs";
import { app_code_lesson_quiz_tokens_tap } from "./app_code_lesson_quiz_tokens_tap.mjs";
export function app_code_lesson_quiz_tokens_tap_next(
  answers_div,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
) {
  "tapping the tokens of a program in the order they are read, with nothing shown to follow, after the guided quiz has shown the order one token at a time; it stands where a quiz draws its answer, so it takes what every quiz there is handed";
  app_code_lesson_quiz_tokens_tap(
    answers_div,
    qa,
    on_success,
    on_wrong,
    correction_code_set,
    false,
    app_code_token_any,
    "Tokens chosen:",
  );
}
