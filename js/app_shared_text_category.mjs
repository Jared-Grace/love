import { app_shared_text_category_color } from "./app_shared_text_category_color.mjs";
import { app_shared_text_category_color_variable } from "./app_shared_text_category_color_variable.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_variable_or } from "./html_style_variable_or.mjs";
export function app_shared_text_category(component) {
  "the dark blue a category word is written in, unless the row it lands in has named another one - a row painted a strong dark colour does, because the dark blue would vanish into it.";
  "it asks the variable rather than being handed a colour, because the category word is painted by whoever is drawing the title, after the row around it has already been coloured. A colour passed by hand would have to travel through every one of those; a variable is read where it is used, whenever that turns out to be.";
  arguments_assert(arguments, 1);
  let color_plain = app_shared_text_category_color();
  let name = app_shared_text_category_color_variable();
  let color = html_style_variable_or(name, color_plain);
  html_font_color_set(component, color);
}
