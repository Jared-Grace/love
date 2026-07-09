import { app_code_lesson_validity_code } from "../../../love/public/src/app_code_lesson_validity_code.mjs";
import { app_code_lesson_name_id } from "../../../love/public/src/app_code_lesson_name_id.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_code_lesson_validity_operator(math_name, batch, above) {
  let r = app_code_lesson_name_id("operators", [math_name]);
  let id = property_get(r, "id");
  let name = property_get(r, "name");
  let lesson = app_code_lesson_validity_code(batch, id, name, above);
  return lesson;
}
