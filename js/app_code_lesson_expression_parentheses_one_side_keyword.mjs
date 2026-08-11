import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_expression_parentheses_one_side_keyword(value) {
  arguments_assert(arguments, 1);
  ("the code word for a true or false value");
  let on_true = js_keyword_true();
  let on_false = js_keyword_false();
  let word = ternary(value, on_true, on_false);
  return word;
}
