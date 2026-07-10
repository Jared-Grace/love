import { app_code_lesson_name_id_generic } from "../../../love/public/src/app_code_lesson_name_id_generic.mjs";
import { html_text_set_curried_right } from "../../../love/public/src/html_text_set_curried_right.mjs";
export function app_code_lesson_name_id(left, rights) {
  let name_get = html_text_set_curried_right;
  let name_id = app_code_lesson_name_id_generic(rights, left, name_get);
  return name_id;
}
