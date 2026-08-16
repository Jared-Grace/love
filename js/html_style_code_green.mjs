import { html_style_code_generic } from "./html_style_code_generic.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
export function html_style_code_green(component) {
  "a piece of code wearing the green a chosen block on the line wears, so a word in a sentence and the block it is talking about are seen to be the same thing";
  "The dark one is code at rest and this one is code that has been picked out. Both are read off the same pair of colours the green button is drawn from, so a sentence naming the block never drifts from the block itself.";
  let color_box_shadow = "transparent";
  let color_background = app_shared_button_background();
  let color_font = app_shared_button_font_color();
  html_style_code_generic(
    component,
    color_background,
    color_box_shadow,
    color_font,
  );
}
