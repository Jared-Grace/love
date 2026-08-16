import { app_code_style_normal } from "./app_code_style_normal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_style_normal_span(parent, text) {
  arguments_assert(arguments, 2);
  ("a written-out value standing inside a sentence rather than on a line of its own - the same look the worked example gives its answer, laid inline");
  ("A sentence that says what a program writes out is naming the very thing the example below shows under its label, so the two have to look alike; a learner who met the word plain in one place and dressed in the other would have no way to tell it was the same thing twice.");
  let span = html_span_text(parent, text);
  app_code_style_normal(span);
  return span;
}
