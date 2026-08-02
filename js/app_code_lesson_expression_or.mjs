import { app_code_category_operators } from "./app_code_category_operators.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_binary_next_arg } from "./app_code_binary_next_arg.mjs";
import { app_code_binary_pair_boolean } from "./app_code_binary_pair_boolean.mjs";
import { js_operator_or } from "./js_operator_or.mjs";
import { or } from "./or.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_symbol_set } from "./app_code_lesson_symbol_set.mjs";
export function app_code_lesson_expression_or() {
  let symbol = js_operator_or();
  let pair = app_code_binary_pair_boolean(or);
  let next_arg = app_code_binary_next_arg(symbol, pair);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id_rights: ["or"],
    category: app_code_category_operators(),
    next_arg,
    example_count: 2,
    forwards_answer_count_override: 2,
  });
  let lesson_symbol = app_code_lesson_symbol_set(lesson, symbol);
  return lesson_symbol;
  function above(root) {
    let c = app_code_container_light_blue(root);
    let t = js_keyword_true();
    let t2 = js_keyword_true();
    let t3 = js_keyword_true();
    let t4 = js_keyword_true();
    html_div_cycle_code(c, [
      "The symbol ",
      symbol,
      " is ",
      t,
      " when the left side is ",
      t2,
      ", or the right side is ",
      t3,
      ", or both sides are ",
      t4,
    ]);
    let f = js_keyword_false();
    let f2 = js_keyword_false();
    html_div_cycle_code(c, [
      "",
      symbol,
      " is only ",
      f,
      " when both sides are ",
      f2,
    ]);
  }
}
