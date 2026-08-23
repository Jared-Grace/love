import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_expression_brackets_or_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: ( ) around ||, an Expressions lesson");
  ("The title paints the marks and spells the words, the same way every other lesson about a symbol does: the lesson is about the marks, and the words are only what the address is written with, where a symbol cannot go.");
  ("The two brackets are painted together as one piece because that is what a learner is looking for on the home list - a pair, not an opening mark on its own.");
  ("It names what the marks stand around, and the pressing lesson it is the twin of names what is done inside them. Titled alike the two would be one line read twice on the home list, with nothing on the screen to say which of them a learner had already done.");
  let symbol = js_operator_or_symbol();
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let pair = text_combine(left_bracket, right_bracket);
  function paint(parent) {
    html_cycle_code(parent, ["", pair, " around ", symbol]);
  }
  let rights = ["brackets or"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
