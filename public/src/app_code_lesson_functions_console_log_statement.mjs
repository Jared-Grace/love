import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_code_statement } from "../../../love/public/src/js_code_statement.mjs";
import { app_code_lesson_functions_console_log_generic } from "../../../love/public/src/app_code_lesson_functions_console_log_generic.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export function app_code_lesson_functions_console_log_statement() {
  var r = app_code_lesson_functions_console_log_generic(
    above,
    js_code_statement,
  );
  let next = property_get(r, "next");
  let fn_name = property_get(r, "fn_name");
  let next_operator = property_get(r, "next_operator");
  let lesson = property_get(r, "lesson");
  let name_id_rights = property_get(r, "name_id_rights");
  list_add(name_id_rights, "statement");
  return lesson;
  function above(root) {}
}
