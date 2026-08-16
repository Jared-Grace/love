import { app_code_expression_chosen_background_color } from "./app_code_expression_chosen_background_color.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { html_style_code_generic } from "./html_style_code_generic.mjs";
export function app_code_expression_chosen_code(component) {
  "a piece of code wearing the blue a chosen block on the line wears, so a word in a sentence and the block it is talking about are seen to be the same thing";
  "The dark one is code at rest and this one is code that has been picked out. Both read the blue from the one place it is named, so a sentence naming the block never drifts from the block itself.";
  let color_box_shadow = "transparent";
  let color_background = app_code_expression_chosen_background_color();
  let color_font = app_shared_button_font_color();
  html_style_code_generic(
    component,
    color_background,
    color_box_shadow,
    color_font,
  );
}
