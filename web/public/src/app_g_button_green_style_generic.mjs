import { app_shared_button_background } from "../../../love/public/src/app_shared_button_background.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_g_button_green_style_generic(component, alpha_channel) {
  html_style_assign(component, {
    "background-color": text_combine(
      app_shared_button_background(),
      alpha_channel,
    ),
  });
}
