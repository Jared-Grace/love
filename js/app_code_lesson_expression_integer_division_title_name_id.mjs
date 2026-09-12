import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { app_code_code_tile } from "./app_code_code_tile.mjs";
import { app_code_lesson_name_id_operators } from "./app_code_lesson_name_id_operators.mjs";
export function app_code_lesson_expression_integer_division_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title says Integer division and then shows the shape the lesson is about, with a gap for each of the two numbers: Math.floor(... / ...)");
  ("★ INTEGER DIVISION IS TWO WORDS A LEARNER HAS NOT MET AND THE SHAPE IS THE WHOLE OF WHAT THEY MEAN. Every other title in this run shows the code it teaches, and this one named a thing instead - so a learner scanning the home list for the rounding-down division they were shown had nothing to recognise it by, while the lesson two rows down showing Math.floor on its own looked like the nearer match.");
  ("The gaps are grey, in the one grey this course paints a gap in, because the numbers are not the lesson - every question picks its own two.");
  ("Painted piece by piece rather than spelled as one string, because a chip made from one string is one colour all the way across and the gaps have to stand apart from the code round them.");
  function fill(host) {
    "Math.floor, its opening bracket, a gap, the slash, a gap, and the closing bracket";
    let name = js_code_math_floor_name();
    let left = js_code_parenthesis_left();
    let opening = text_combine(name, left);
    html_span_text(host, opening);
    app_code_placeholder_dots(host);
    let slash = js_operator_division_symbol();
    let spaced = text_combine_multiple([" ", slash, " "]);
    html_span_text(host, spaced);
    app_code_placeholder_dots(host);
    let right = js_code_parenthesis_right();
    html_span_text(host, right);
  }
  function paint(parent) {
    html_span_text(parent, "Integer division ");
    app_code_code_tile(parent, fill);
  }
  let built = app_code_lesson_name_id_operators(paint);
  return built;
}
