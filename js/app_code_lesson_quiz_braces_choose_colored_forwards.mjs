import { app_code_lesson_quiz_braces_choose_colored_generic } from "./app_code_lesson_quiz_braces_choose_colored_generic.mjs";
export function app_code_lesson_quiz_braces_choose_colored_forwards(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  "choosing the braces of coloured code, among braces in the same two colours";
  app_code_lesson_quiz_braces_choose_colored_generic(
    parent,
    qa,
    on_success,
    on_wrong,
    batch_get,
    false,
  );
}
