import { text_combine_space_right } from "../../../love/public/src/text_combine_space_right.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_code_lesson_name_id_generic } from "../../../love/public/src/app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_name_id_function(left, rights) {
  let name_get = function lambda(parent) {
    let first = list_first(rights);
    let combined = text_combine_space_right(left);
    let span = html_span_text(parent, combined);
    hcc;
  };
  let name_id = app_code_lesson_name_id_generic(rights, left, name_get);
  return name_id;
}
