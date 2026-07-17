import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_code_prefix } from "./js_code_prefix.mjs";
import { js_operator_bang } from "./js_operator_bang.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_symbol_set } from "./app_code_lesson_symbol_set.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_not() {
  let operator = js_operator_bang();
  let symbol = property_get(operator, "operator");
  function not_of(keyword) {
    let code = js_code_prefix(symbol, keyword);
    return code;
  }
  function refill() {
    let list = [not_of(js_keyword_true()), not_of(js_keyword_false())];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  var r = app_code_lesson_functions_console_log_generic({
    above,
    lambda$code: js_code_statement,
    name_id_rights: [" not"],
    category: "operator",
    next_arg,
    example_count: 2,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: 2,
  });
  let lesson = property_get(r, "lesson");
  let lesson_symbol = app_code_lesson_symbol_set(lesson, symbol);
  return lesson_symbol;
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "The symbol ",
      symbol,
      " gives the opposite yes-or-no answer",
    ]);
    html_div_cycle_code(c, [
      "",
      not_of(js_keyword_true()),
      " is ",
      js_keyword_false(),
    ]);
    html_div_cycle_code(c, [
      "",
      not_of(js_keyword_false()),
      " is ",
      js_keyword_true(),
    ]);
  }
}
