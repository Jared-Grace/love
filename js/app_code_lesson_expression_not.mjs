import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_code_not } from "./js_code_not.mjs";
import { app_code_category_operators } from "./app_code_category_operators.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_symbol_set } from "./app_code_lesson_symbol_set.mjs";
export function app_code_lesson_expression_not() {
  let symbol = js_operator_bang_symbol();
  function refill() {
    let code = js_keyword_true();
    let prefixed = js_code_not(code);
    let code2 = js_keyword_false();
    let prefixed2 = js_code_not(code2);
    let list = [prefixed, prefixed2];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id_rights: ["not"],
    category: app_code_category_operators(),
    next_arg,
    example_count: 2,
    forwards_answer_count_override: 2,
  });
  let lesson_symbol = app_code_lesson_symbol_set(lesson, symbol);
  return lesson_symbol;
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "The symbol ",
      symbol,
      " gives the opposite yes-or-no answer",
    ]);
    let code3 = js_keyword_true();
    let prefixed3 = js_code_not(code3);
    let f = js_keyword_false();
    html_div_cycle_code(c, ["", prefixed3, " is ", f]);
    let code4 = js_keyword_false();
    let prefixed4 = js_code_not(code4);
    let t = js_keyword_true();
    html_div_cycle_code(c, ["", prefixed4, " is ", t]);
  }
}
