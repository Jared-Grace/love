import { app_shared_container_background_color } from "./app_shared_container_background_color.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { app_shared_container_centered } from "./app_shared_container_centered.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_container(overlay) {
  let container = app_shared_container_centered(overlay);
  app_shared_style_control(container);
  html_style_assign(container, {
    padding: "0.25em",
    "background-color": text_combine(
      app_shared_container_background_color(),
      "bc",
    ),
  });
  return container;
}
