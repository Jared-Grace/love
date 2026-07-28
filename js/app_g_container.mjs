import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { app_shared_container_background_color } from "./app_shared_container_background_color.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { app_shared_container_centered } from "./app_shared_container_centered.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_container(overlay) {
  let container = app_shared_container_centered(overlay);
  app_shared_style_control(container);
  let left = app_shared_container_background_color();
  html_style_assign(container, {
    padding: app_shared_spaced_tiny_gap(),
    "font-size": "inherit",
    "background-color": text_combine(left, "bc"),
  });
  return container;
}
