import { app_g_container } from "./app_g_container.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_container_color(overlay, color) {
  let container = app_g_container(overlay);
  html_style_set(container, "background-color", text_combine(color, "bc"));
  return container;
}
