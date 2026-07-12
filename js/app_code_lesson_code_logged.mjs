import { app_code_lesson_code_generic } from "./app_code_lesson_code_generic.mjs";
export function app_code_lesson_code_logged(batch_get, name_id, above) {
  let value = "logged output";
  let lesson = app_code_lesson_code_generic(value, batch_get, name_id, above);
  return lesson;
}
