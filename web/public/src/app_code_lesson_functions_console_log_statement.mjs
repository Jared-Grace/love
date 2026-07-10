import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_cycle_bold_code } from "../../../love/public/src/html_cycle_bold_code.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_div_cycle_bold } from "../../../love/public/src/html_div_cycle_bold.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
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
    let c2 = app_code_container_light_blue(root);
    html_div_text(c2, "In English we use sentences");
    html_div_cycle_bold(c2, [
      'In JavaScript, "sentences" are called ',
      "statements",
    ]);
    let c = app_code_container_light_blue_text(
      root,
      "In English, we can use a period (.) to mean the end of a sentence.",
    );
    let div2 = html_div(c);
    html_cycle_bold_code(div2, [
      "In JavaScript, instead of a period (.), we use a ",
      "semicolon",
      " ",
      ";",
      " to mean the end of a JavaScript statement",
    ]);
  }
}
