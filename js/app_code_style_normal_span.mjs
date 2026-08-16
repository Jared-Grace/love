import { app_shared_container_blue_medium_background_color } from "./app_shared_container_blue_medium_background_color.mjs";
import { app_shared_button_border_width } from "./app_shared_button_border_width.mjs";
import { html_border } from "./html_border.mjs";
import { app_code_style_normal } from "./app_code_style_normal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_style_normal_span(parent, text) {
  arguments_assert(arguments, 2);
  ("a written-out value standing inside a sentence rather than on a line of its own - the same look the worked example gives its answer, laid inline");
  ("A sentence that says what a program writes out is naming the very thing the example below shows under its label, so the two have to look alike; a learner who met the word plain in one place and dressed in the other would have no way to tell it was the same thing twice.");
  let span = html_span_text(parent, text);
  app_code_style_normal(span);
  ("a thin edge around it, drawn in the blue the example card is filled with - standing alone on that card the white block already has an edge, the card's own colour beside it, and a word set into a sentence on a paler ground has none, so the edge is put back rather than a second look invented");
  ("The border goes on after the shared look, which takes every border off; the two are not in disagreement - the look says nothing is drawn around a written-out value by default, and this one place says why it is here.");
  ("Drawn at the width a pale button is edged with, the repo's one measure of an edge you can find without it reading as a frame. If the two ever need to differ, the value is a function and splitting it costs a rename.");
  let border_color = app_shared_container_blue_medium_background_color();
  let border_width = app_shared_button_border_width();
  html_border(span, border_width, border_color);
  return span;
}
