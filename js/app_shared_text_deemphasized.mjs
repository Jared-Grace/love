import { app_shared_text_deemphasized_color } from "./app_shared_text_deemphasized_color.mjs";
import { app_shared_text_deemphasized_color_variable } from "./app_shared_text_deemphasized_color_variable.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_variable_or } from "./html_style_variable_or.mjs";
export function app_shared_text_deemphasized(component) {
  "the grey a word steps back into, unless the container it sits in has named another one - a container painted a strong dark colour does, because this grey is nearly as dark as that.";
  arguments_assert(arguments, 1);
  let color_plain = app_shared_text_deemphasized_color();
  let name = app_shared_text_deemphasized_color_variable();
  let color = html_style_variable_or(name, color_plain);
  html_font_color_set(component, color);
}
