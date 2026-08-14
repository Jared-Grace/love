import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_expression_operator_pressable(span) {
  arguments_assert(arguments, 1);
  ("make one operator standing inside a dark line of code look like something to press: a pale chip with the dark of the line as its lettering");
  ("The line it sits in is dark, so the pressable one is the light thing on it rather than the loud one - which leaves the rest of the line reading as code instead of as a row of buttons.");
  let background = app_shared_color_gray_light();
  html_style_background_color_set(span, background);
  let font = app_shared_color_code_background();
  html_style_set(span, "color", font);
  html_style_set(span, "padding", "0 0.35em");
  html_style_set(span, "border-radius", "0.2em");
}
