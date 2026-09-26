import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_category_color_variable } from "./app_shared_text_category_color_variable.mjs";
import { app_shared_color_green_dark } from "./app_shared_color_green_dark.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
export function app_shared_text_category_complete_set(component) {
  "say, once, on anything painted the finished colour: the category word inside here is the dark green twin of its usual dark blue, so a finished title reads as one green - the same on the home list's row as on the lesson's own bar, at the human's request";
  arguments_assert(arguments, 1);
  let name_category = app_shared_text_category_color_variable();
  let category = app_shared_color_green_dark();
  html_style_variable_set(component, name_category, category);
}
