import { app_code_lesson_quiz_tokens_tap } from "./app_code_lesson_quiz_tokens_tap.mjs";
import { js_code_brace_is } from "./js_code_brace_is.mjs";
export function app_code_lesson_quiz_tokens_tap_braces(
  answers_div,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
) {
  "tapping the tokens of a program in the order they are read, with nothing shown to follow, where only the braces tapped are written down, so the braces gather into their order as the tokens are tapped; it stands where a quiz draws its answer, so it takes what every quiz there is handed";
  app_code_lesson_quiz_tokens_tap(
    answers_div,
    qa,
    on_success,
    on_wrong,
    correction_code_set,
    false,
    js_code_brace_is,
    "Braces chosen:",
  );
}
