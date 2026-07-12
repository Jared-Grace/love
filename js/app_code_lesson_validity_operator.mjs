import { app_code_lesson_validity_code } from "./app_code_lesson_validity_code.mjs";
import { app_code_lesson_name_id } from "./app_code_lesson_name_id.mjs";
export function app_code_lesson_validity_operator(math_name, batch, above) {
  let name_id = app_code_lesson_name_id("operators", [math_name]);
  let lesson = app_code_lesson_validity_code(batch, name_id, above);
  return lesson;
}
