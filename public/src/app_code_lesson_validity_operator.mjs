import { app_code_lesson_validity_code } from "../../../love/public/src/app_code_lesson_validity_code.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
export function app_code_lesson_validity_operator(math_name, batch, above) {
  let name = "Operators " + text_wrap_parenthesis(math_name);
  let id = "operators_" + math_name;
  let lesson = app_code_lesson_validity_code(batch, id, name, above);
  return lesson;
}
