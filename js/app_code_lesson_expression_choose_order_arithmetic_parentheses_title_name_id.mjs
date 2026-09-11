import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_parentheses_plus_minus_inside_words } from "./app_code_parentheses_plus_minus_inside_words.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_choose_order_arithmetic_parentheses_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: solving a line with a + or a - inside ( and ) a part at a time, an Expressions lesson");
  ("It is the title of the lesson straight after this one with the word Solve in front of it, out of the one place both of them read. That is how every pressing lesson in this course stands beside the lesson asking the same line all at once, and the two rows of the home list have to differ by that word and by nothing else.");
  function paint(parent) {
    let words = app_code_parentheses_plus_minus_inside_words("Solve ");
    html_cycle_code(parent, words);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
