import { app_shared_text_category_color_on_dark } from "./app_shared_text_category_color_on_dark.mjs";
import { app_shared_text_category_color_variable } from "./app_shared_text_category_color_variable.mjs";
import { app_shared_text_deemphasized_color_on_dark } from "./app_shared_text_deemphasized_color_on_dark.mjs";
import { app_shared_text_deemphasized_color_variable } from "./app_shared_text_deemphasized_color_variable.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
export function app_shared_text_colors_on_dark_set(component) {
  "say, once, on anything painted a strong dark colour: the quieter kinds of word inside here are the light versions of themselves.";
  "the two colours it names are the two a word paints on itself rather than inheriting - a category word and a stepped-back one. Both are dark by default, which is right nearly everywhere and unreadable here, and neither can be handed a colour by whoever paints the dark thing, because the words are usually painted afterwards by somebody else.";
  arguments_assert(arguments, 1);
  let name_category = app_shared_text_category_color_variable();
  let category = app_shared_text_category_color_on_dark();
  html_style_variable_set(component, name_category, category);
  let name_deemphasized = app_shared_text_deemphasized_color_variable();
  let deemphasized = app_shared_text_deemphasized_color_on_dark();
  html_style_variable_set(component, name_deemphasized, deemphasized);
}
