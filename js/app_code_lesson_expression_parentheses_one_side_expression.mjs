import { app_code_comparison_equality_symbol } from "./app_code_comparison_equality_symbol.mjs";
import { app_code_operator_code_subject_first } from "./app_code_operator_code_subject_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_comparison_side } from "./app_code_comparison_side.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_true_false_word } from "./js_true_false_word.mjs";
export function app_code_lesson_expression_parentheses_one_side_expression(
  want_true,
  comparison_first,
) {
  arguments_assert(arguments, 2);
  ("a comparison wrapped in ( and ) and a plain true or false, in whichever order comparison_first asks for, joined by === or !== picked so the whole line lands on want_true. Swapping the two sides cannot change the answer - === and !== read the same either way - so the same operator choice serves both orders");
  let comparison = app_code_comparison_side();
  let plain_value = list_random_item([true, false]);
  let symbol = app_code_comparison_equality_symbol(
    comparison,
    plain_value,
    want_true,
  );
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let inside = property_get(comparison, "code");
  let comparison_code = text_combine_multiple([open, inside, close]);
  let plain_code = js_true_false_word(plain_value);
  let code = app_code_operator_code_subject_first(
    comparison_first,
    comparison_code,
    plain_code,
    symbol,
  );
  return code;
}
