import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { app_shared_container_base } from "./app_shared_container_base.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
export function app_shared_container_blue(parent) {
  let div = app_shared_container_base(parent);
  let background = app_shared_container_blue_background_color();
  html_style_background_color_set(div, background);
  let border_width = app_shared_spaced_frame_gap();
  let border_color = app_shared_color_blue_pale();
  html_border(div, border_width, border_color);
  return div;
}
