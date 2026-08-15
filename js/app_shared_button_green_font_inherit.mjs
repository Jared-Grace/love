import { app_shared_style_control_padding } from "./app_shared_style_control_padding.mjs";
import { app_shared_style_control_font_size } from "./app_shared_style_control_font_size.mjs";
import { css_em_multiply } from "./css_em_multiply.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_font_size_inherit } from "./html_style_font_size_inherit.mjs";
export function app_shared_button_green_font_inherit(div, text, lambda) {
  arguments_assert(arguments, 3);
  ("a green button kept at the size of the writing around it, for a button that sits inside something being read rather than at the foot of a screen");
  ("A control is set larger than the page because it is the thing the screen is for. A button standing in the middle of an explanation is the next step of that explanation, and setting it bigger than the sentences it follows reads as a heading over them rather than as the thing to press when they have been read.");
  let component = app_shared_button_green(div, text, lambda);
  html_style_font_size_inherit(component);
  ("the padding is carried across by hand because it was written in em: it was measured against the enlarged font this button has just given up, so left alone it would shrink with the writing and this button would sit tighter in its edges than every other button on the page");
  let outer = app_shared_style_control_padding();
  let inner = app_shared_style_control_font_size();
  let padding = css_em_multiply(outer, inner);
  html_style_padding(component, padding);
  return component;
}
