import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_expression_brackets_moved_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: ( ) around either pair, an Expressions lesson");
  ("The title paints the marks and spells the words, the same way every other lesson about a symbol does: the lesson is about the marks, and the words are only what the address is written with, where a symbol cannot go.");
  ("The two brackets are painted together as one piece because that is what a learner is looking for on the home list - a pair, not an opening mark on its own.");
  ("It names what the marks stand around, and the pressing lesson it is the twin of names what is done with them. That is the same division the pair of lessons above it keeps, so a learner reading the home list can tell a twin from its pressing lesson by the shape of the title rather than by remembering which came first.");
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let pair = text_combine(left_bracket, right_bracket);
  function paint(parent) {
    html_cycle_code(parent, ["", pair, " around either pair"]);
  }
  let rights = ["brackets around either pair"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
