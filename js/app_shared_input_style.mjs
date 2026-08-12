import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
export function app_shared_input_style(component) {
  app_shared_style_control(component);
  html_style_background_color_set(component, "white");
  html_border(
    component,
    app_shared_spaced_frame_gap(),
    app_shared_color_blue_pale(),
  );
}
