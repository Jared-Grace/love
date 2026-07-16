import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_true_false() {
  function refill() {
    let list = [js_keyword_true(), js_keyword_false()];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  var r = app_code_lesson_functions_console_log_generic({
    above,
    lambda$code: js_code_statement,
    name_id_rights: [" true or false"],
    next_arg,
    example_count: 2,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: 2,
  });
  let lesson = property_get(r, "lesson");
  return lesson;
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "",
      js_keyword_true(),
      " and ",
      js_keyword_false(),
      " are the two yes-or-no answers you have seen",
    ]);
    app_code_container_light_blue_cycle_code(root, [
      "Now you can write ",
      js_keyword_true(),
      " or ",
      js_keyword_false(),
      " all by itself, with no question to ask",
    ]);
  }
}
