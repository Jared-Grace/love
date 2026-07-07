import { app_code_lesson_validity_base } from "../../../love/public/src/app_code_lesson_validity_base.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
export function app_code_lesson_validity_operator(math_name, batch, above) {
  let inside = text_first_upper_to(math_name);
  let name = "Operators " + text_wrap_parenthesis(inside);
  let id = "operators_" + math_name;
  let lesson = app_code_lesson_validity_base(batch, id, name, above);
  return lesson;
}
