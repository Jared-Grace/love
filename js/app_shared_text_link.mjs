import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_text_link_color } from "./app_shared_text_link_color.mjs";
import { html_underline } from "./html_underline.mjs";
export function app_shared_text_link(component) {
  html_font_color_set(component, app_shared_text_link_color());
  html_underline(component);
}
