import { app_shared_color_gray } from "./app_shared_color_gray.mjs";
import { app_code_expression_chip_border_width } from "./app_code_expression_chip_border_width.mjs";
import { html_border } from "./html_border.mjs";
import { app_code_expression_chip_style } from "./app_code_expression_chip_style.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_code_generic_unshadowed } from "./html_style_code_generic_unshadowed.mjs";
export function app_code_expression_operator_chip(span) {
  arguments_assert(arguments, 1);
  ("how a single operator looks when it is being singled out: a pale chip lettered in the dark of the code, in the code's own writing");
  ("The one look, in one place, because the operator a sentence names and the operator waiting to be pressed on the line have to be recognisably the same thing. A learner is told to choose the times and then has to find the times; if the one they are shown and the one they must press are drawn differently, the finding is a second puzzle the lesson never meant to set.");
  let background = app_shared_color_gray_light();
  let font = app_shared_color_code_background();
  html_style_code_generic_unshadowed(span, background, font);
  app_code_expression_chip_style(span);
  ("edged the way the screen's own pale buttons are edged, because the fill was chosen to stand out against a dark line of code and this chip is also said in a sentence on a white card, where a pale fill on a pale ground has no edge of its own");
  ("Drawn stronger than a button's edge - the darker of the two grays, and thicker - because a button is the width of the screen and a chip is one character, so the same edge that outlines the one barely marks the other.");
  let border_color = app_shared_color_gray();
  let border_width = app_code_expression_chip_border_width();
  html_border(span, border_width, border_color);
}
