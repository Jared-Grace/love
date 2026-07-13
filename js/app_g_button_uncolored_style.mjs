import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_button_uncolored_style(component) {
  html_style_set(
    component,
    "background-color",
    text_combine(app_shared_button_uncolored_background_color(), "dd"),
  );
  html_style_set(component, "color", "black");
}
