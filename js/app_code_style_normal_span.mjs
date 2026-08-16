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
  ("an edge around it, so a white word set into a sentence on a pale blue ground can be found - standing alone on the example card the white block is already bounded by the card's own colour beside it, and inline it has nothing");
  ("The border goes on after the shared look, which takes every border off; the two are not in disagreement - the look says nothing is drawn around a written-out value by default, and this one place says why it is here.");
  ("Drawn in the pale step of the blue scale rather than the medium one. The medium blue is only a shade off the card it would be drawn on, so an edge in it was there and could not be seen; the pale step is the next one down and is what the light card already draws its own border in, so nothing new is brought in to make it visible.");
  ("Drawn at an operator chip's width rather than a button's, for the reason that width was chosen: a button runs the width of the screen, so an edge measured on one is barely there on something a word wide set in the size of the writing around it.");
  let border_color = app_shared_color_blue_pale();
  let border_width = app_code_expression_chip_border_width();
  html_border(span, border_width, border_color);
  return span;
}
