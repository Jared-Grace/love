import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_comparison_side } from "./app_code_comparison_side.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_parentheses_both_sides_wrapped() {
  arguments_assert(arguments, 0);
  ("one comparison already wrapped in ( and ), with the true or false it works out to");
  let side = app_code_comparison_side();
  let inner = property_get(side, "code");
  let value = property_get(side, "value");
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let code = text_combine_multiple([open, inner, close]);
  let r = {
    code,
    value,
  };
  return r;
}
