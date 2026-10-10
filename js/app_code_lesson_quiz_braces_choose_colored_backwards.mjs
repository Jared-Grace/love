import { app_code_lesson_quiz_braces_choose_colored_generic } from "./app_code_lesson_quiz_braces_choose_colored_generic.mjs";
export function app_code_lesson_quiz_braces_choose_colored_backwards(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  "choosing the code of coloured braces, among code in the same two colours";
  app_code_lesson_quiz_braces_choose_colored_generic(
    parent,
    qa,
    on_success,
    on_wrong,
    batch_get,
    true,
  );
}
