import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_g_container } from "./app_g_container.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_container_color(overlay, color) {
  let container = app_g_container(overlay);
  let background = text_combine(color, "bc");
  html_style_background_color_set(container, background);
  return container;
}
