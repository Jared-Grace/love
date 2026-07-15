import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_text_category_color } from "./app_shared_text_category_color.mjs";
export function app_shared_text_category(component) {
  html_font_color_set(component, app_shared_text_category_color());
}
