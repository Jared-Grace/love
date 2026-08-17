import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text_code_background } from "./html_span_text_code_background.mjs";
export function app_code_span_text_code_highlight(parent, text) {
  arguments_assert(arguments, 2);
  ("a piece of code wearing the highlight colour instead of the usual dark one, because a word elsewhere on the screen is pointing at it");
  ("The pair of this and the highlighted English word, and the reason both go through one colour: the whole of what they say is that they match.");
  let background = app_code_highlight_color();
  let span = html_span_text_code_background(parent, text, background);
  return span;
}
