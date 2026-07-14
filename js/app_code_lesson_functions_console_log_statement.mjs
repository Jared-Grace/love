import { digits_3_random_next } from "../../love/js/digits_3_random_next.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_cycle_bold_code } from "./html_cycle_bold_code.mjs";
import { html_div_cycle_bold } from "./html_div_cycle_bold.mjs";
import { app_code_container_light_blue_text } from "./app_code_container_light_blue_text.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_code_lesson_functions_console_log_statement() {
  var r = app_code_lesson_functions_console_log_generic({
    above,
    lambda$code: js_code_statement,
    name_id_rights: [" statement"],
    next_arg: digits_3_random_next(),
    example_count: 1,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
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
    let div2 = html_div(c);
    html_cycle_bold_code(div2, [
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
