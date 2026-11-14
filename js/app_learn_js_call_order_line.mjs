import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span } from "./html_span.mjs";
import { app_learn_js_expression_operator_pressable } from "./app_learn_js_expression_operator_pressable.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { app_learn_js_lesson_quiz_wrong_set } from "./app_learn_js_lesson_quiz_wrong_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { app_learn_js_expression_chosen_set } from "./app_learn_js_expression_chosen_set.mjs";
export function app_learn_js_call_order_line(
  parent,
  outer_code,
  inner_code,
  inner_name,
  on_wrong,
) {
  arguments_assert(arguments, 5);
  ("a line calling one function inside another, as r.push(k.pop()) does, drawn with each call's own operator pressable, as + is pressable on an expression line: .pop() for the call inside, and both .push( and its ) for the call outside, since what sits in its ( ) splits that operator in two. The name each is called on is not pressed, as the a of a + b is not. 2026-11-14, at the human's asking");
  ("answers the inner operator's piece, for a guide to point at, and a promise kept once it is pressed. Pressing the outer one is refused, as an operator that must wait is on an expression line");
  let at = outer_code.lastIndexOf(inner_code);
  let prefix = outer_code.slice(0, at);
  let dot = prefix.indexOf(".");
  let suffix = outer_code.slice(at + inner_code.length);
  let line = html_div(parent);
  html_style_code_dark(line);
  let text = prefix.slice(0, dot);
  html_span_text(line, text);
  let text2 = prefix.slice(dot);
  let outer_open = html_span_text(line, text2);
  let inner_span = html_span(line);
  html_span_text(inner_span, inner_name);
  let text3 = inner_code.slice(inner_name.length);
  let inner_operator = html_span_text(inner_span, text3);
  let outer_close = html_span_text(line, suffix);
  let outer_pieces = [outer_open, outer_close];
  for (let piece of [outer_open, inner_operator, outer_close]) {
    app_learn_js_expression_operator_pressable(piece);
  }
  html_data_set_test_happy(inner_operator);
  function outer_refuse() {
    for (let piece2 of outer_pieces) {
      app_learn_js_lesson_quiz_wrong_set(piece2);
      html_style_set(piece2, "pointer-events", "none");
    }
    on_wrong();
  }
  for (let piece3 of outer_pieces) {
    html_on_click(piece3, outer_refuse);
  }
  let pressed = new Promise(function pressed_wait(resolve) {
    function inner_press() {
      for (let piece4 of [outer_open, inner_operator, outer_close]) {
        html_style_set(piece4, "pointer-events", "none");
      }
      app_learn_js_expression_chosen_set(inner_span, inner_operator);
      resolve();
    }
    html_on_click(inner_operator, inner_press);
  });
  let r = {
    right: inner_operator,
    pressed,
  };
  return r;
}
