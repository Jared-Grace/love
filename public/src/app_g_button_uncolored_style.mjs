import { app_shared_button_uncolored_background_color } from "../../../love/public/src/app_shared_button_uncolored_background_color.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_g_button_uncolored_style(component) {
  html_style_assign(component, {
    "background-color": text_combine(
      app_shared_button_uncolored_background_color(),
      "dd",
    ),
  });
  html_style_assign(component, {
    color: "black",
  });
}
