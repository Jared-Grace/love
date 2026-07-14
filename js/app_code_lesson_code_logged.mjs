import { app_code_lesson_code_generic } from "./app_code_lesson_code_generic.mjs";
import { object_assign } from "./object_assign.mjs";
export function app_code_lesson_code_logged(params) {
  let value = "logged output";
  object_assign(params, { value });
  let lesson = app_code_lesson_code_generic(params);
  return lesson;
}
