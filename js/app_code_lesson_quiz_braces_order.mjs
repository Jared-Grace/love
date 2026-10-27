import { app_code_lesson_quiz_braces_order_generic } from "./app_code_lesson_quiz_braces_order_generic.mjs";
export function app_code_lesson_quiz_braces_order({
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
}) {
  "A quiz where the student writes out the braces of a program in the order they stand, by tapping a { piece and a } piece, and what has been written so far is drawn with every pair in a colour of its own.";
  app_code_lesson_quiz_braces_order_generic({
    parent,
    info,
    qa,
    on_success,
    on_wrong,
    correction_code_set,
    colored: true,
  });
}
