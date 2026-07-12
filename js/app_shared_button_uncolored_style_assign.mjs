import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_button_uncolored_style_assign(component) {
  html_style_assign(component, {
    color: "black",
    "background-color": app_shared_button_uncolored_background_color(),
  });
}
