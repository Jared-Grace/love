import { app_code_expression_chosen_background_color } from "./app_code_expression_chosen_background_color.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_expression_chosen_style_assign(component) {
  arguments_assert(arguments, 1);
  ("colour a piece of the page as the piece being worked out: filled in the chosen blue and lettered in white");
  ("Colour and nothing else, so it can be given to something that already has its shape - the block standing on the line has been a piece of code since it was written, and all that is happening to it here is that it is being pointed at.");
  let color = app_code_expression_chosen_background_color();
  html_style_background_color_set(component, color);
  let color_font = app_shared_button_font_color();
  html_font_color_set(component, color_font);
}
