import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_button_green_style_generic(component, alpha_channel) {
  html_style_set(
    component,
    "background-color",
    text_combine(app_shared_button_background(), alpha_channel),
  );
}
