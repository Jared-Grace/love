import { arguments_assert } from "./arguments_assert.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_expression_chosen_uncolored(component) {
  arguments_assert(arguments, 1);
  ("take the green colouring off a piece and leave everything else about it alone - its fill goes and its lettering goes back to the colour of whatever it is standing in");
  ("Colour only, nothing about shape or room. The two are wanted apart because they are wanted at different speeds: where a piece stands has to change in one frame with the line it is part of, and what colour it is is free to take a while.");
  html_style_background_color_set(component, "transparent");
  html_font_color_set(component, "inherit");
}
