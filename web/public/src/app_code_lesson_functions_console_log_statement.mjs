import { app_code_container_light_blue_text } from "../../../love/public/src/app_code_container_light_blue_text.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_code_statement } from "../../../love/public/src/js_code_statement.mjs";
import { app_code_lesson_functions_console_log_generic } from "../../../love/public/src/app_code_lesson_functions_console_log_generic.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export function app_code_lesson_functions_console_log_statement() {
  var r = app_code_lesson_functions_console_log_generic(
    above,
    js_code_statement,
    [" statement"],
  );
  let next = property_get(r, "next");
  let fn_name = property_get(r, "fn_name");
  let next_operator = property_get(r, "next_operator");
  let lesson = property_get(r, "lesson");
  log(app_code_lesson_functions_console_log_statement.name, {
    lesson,
  });
  return lesson;
  function above(root) {
    app_code_container_light_blue_text(root2, text);
  }
}
