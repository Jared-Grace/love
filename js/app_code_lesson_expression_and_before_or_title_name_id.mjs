import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_and_before_or_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: && before ||, an Expressions lesson");
  ("The title paints the two symbols and spells the two words, the same way every other lesson about a symbol does: the lesson is about the symbols, and the words are only what the address is written with, where a symbol cannot go.");
  ("It names the rule, and so does the pressing lesson it is the twin of. The two are told apart by the one word Solve standing in front of the other, which is how this course spells the difference everywhere; before that, the pair carried two different phrasings and a learner had to read both rows to work out that they were one line asked twice.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  function paint(parent) {
    html_cycle_code(parent, [
      "",
      and_symbol,
      " before ",
      or_symbol,
    ]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
