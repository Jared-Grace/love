import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_text_deemphasized_color } from "./app_shared_text_deemphasized_color.mjs";
export function app_shared_text_deemphasized(component) {
  html_font_color_set(component, app_shared_text_deemphasized_color());
}
