import { app_code_style_normal_span } from "./app_code_style_normal_span.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_value_line(parent, label, value) {
  arguments_assert(arguments, 3);
  ("a line of writing that ends in a value, the value wearing the look the worked example gives its answer");
  ("Wherever a lesson names the thing that comes out - what a program writes out, or what a person would answer when asked what is in the cup - it is the same value and so it is dressed the same way. The words in front of it change; the value does not.");
  let d = html_div(parent);
  html_span_text(d, label);
  let span = app_code_style_normal_span(d, value);
  return span;
}
