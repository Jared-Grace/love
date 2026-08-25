import { html_style_font_size_inherit } from "./html_style_font_size_inherit.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export function app_shared_button_back(container, lambda) {
  "The way out of a screen is written at the size of the words around it. What it is built out of is the dressing a form control wears, and a form control is given a fifth again of the page's text size because a browser draws one in a small face of its own that has nothing to do with the page - a button in these apps already wears the page's face, so that step only made this one button larger than every other button on the same screen.";
  let text = app_shared_button_back_text();
  let button = app_shared_button_uncolored(container, text, lambda);
  html_style_font_size_inherit(button);
  return button;
}
