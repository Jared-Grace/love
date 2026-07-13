import { html_style_background_color_set_or_remove } from "./html_style_background_color_set_or_remove.mjs";
import { html_font_color_set_or_remove } from "./html_font_color_set_or_remove.mjs";
import { app_shared_button_selected_background_color } from "./app_shared_button_selected_background_color.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { list_includes } from "./list_includes.mjs";
export function html_style_background_color_set_or_remove_list(
  component,
  list,
  item,
) {
  let chosen = list_includes(list, item);
  let color = app_shared_button_selected_background_color();
  html_style_background_color_set_or_remove(chosen, component, color);
  let font = app_shared_button_font_color();
  html_font_color_set_or_remove(chosen, component, font);
}
