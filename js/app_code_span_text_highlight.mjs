import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_span_text_highlight_color } from "./app_code_span_text_highlight_color.mjs";
export function app_code_span_text_highlight(parent, text) {
  arguments_assert(arguments, 2);
  ("an ordinary English word given the same coloured tile a piece of code gets, so that the word and the code can be seen to be about each other");
  ("The pair of this and the highlighted piece of code, and the reason both go through one colour: the whole of what they say is that they match.");
  ("This is the one-pointer form, which is nearly every screen: no caller picks a colour, so no caller can pick a wrong one. The two-pointer form hands its colour in.");
  let background = app_code_highlight_color();
  let span = app_code_span_text_highlight_color(parent, text, background);
  return span;
}
