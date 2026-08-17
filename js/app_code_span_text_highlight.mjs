import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_code_unfonted } from "./html_style_code_unfonted.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_code_span_text_highlight(parent, text) {
  arguments_assert(arguments, 2);
  ("an ordinary English word given the same coloured tile a piece of code gets, so that the word and the code can be seen to be about each other");
  ("Shaped like a code chip and deliberately not written like one: same background, same rounding, same padding, but the reading font rather than the code font. A word in code font would be read as code, and this word is not code - it is the English saying where in the code to look.");
  let span = html_span(parent);
  html_text_set(span, text);
  let background = app_code_highlight_color();
  let font = "white";
  html_style_code_unfonted(span, background, font);
  return span;
}
