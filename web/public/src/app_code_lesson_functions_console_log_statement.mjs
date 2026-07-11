import { app_code_container_light_blue_cycle_code } from "../../../love/public/src/app_code_container_light_blue_cycle_code.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_cycle_bold_code } from "../../../love/public/src/html_cycle_bold_code.mjs";
import { html_div_cycle_bold } from "../../../love/public/src/html_div_cycle_bold.mjs";
import { app_code_container_light_blue_text } from "../../../love/public/src/app_code_container_light_blue_text.mjs";
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
  let fn_name = property_get(r, "fn_name");
  let lesson = property_get(r, "lesson");
  return lesson;
  function above(root) {
    let c2 = app_code_container_light_blue_text(
      root,
      "In English we use sentences",
    );
    html_div_cycle_bold(c2, [
      'In JavaScript, "sentences" are called ',
      "statements",
    ]);
    let c = app_code_container_light_blue_text(
      root,
      "In English, we can use a period (.) to mean the end of a sentence.",
    );
    let div = html_div(c);
    html_cycle_bold_code(div, [
      "In JavaScript, instead of a period (.), we use a ",
      "semicolon",
      " ",
      ";",
      " to mean the end of a JavaScript statement",
    ]);
    app_code_container_light_blue_cycle_code(root, [
      "Therefore, this lesson is the same as the previous, except there is a ",
      ";",
      " at the end of the ",
      fn_name,
      " function call",
    ]);
  }
}
