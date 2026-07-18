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
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_or() {
  let symbol = js_operator_or();
  let pair = app_code_binary_pair_boolean(or);
  let next_arg = app_code_binary_next_arg(symbol, pair);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id_rights: [" or"],
    category: "operators",
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
      " is ",
      js_keyword_true(),
      " when the left side is ",
      js_keyword_true(),
      ", or the right side is ",
      js_keyword_true(),
      ", or both sides are ",
      js_keyword_true(),
    ]);
    html_div_cycle_code(c, [
      "",
      symbol,
      " is only ",
      js_keyword_false(),
      " when both sides are ",
      js_keyword_false(),
    ]);
  }
}
