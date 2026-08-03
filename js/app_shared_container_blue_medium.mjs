import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { app_shared_container_base } from "./app_shared_container_base.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
import { app_shared_container_blue_medium_background_color } from "./app_shared_container_blue_medium_background_color.mjs";
export function app_shared_container_blue_medium(parent) {
  "the middle step of the graduated blue nesting: a card one shade deeper than the light blue container, so an inner card set inside a light-blue outer card reads as nested without leaving the blue family";
  let div = app_shared_container_base(parent);
  let color = app_shared_container_blue_medium_background_color();
  html_style_background_color_set(div, color);
  let border = app_shared_container_blue_border_color();
  html_border(div, app_shared_spaced_frame_gap(), border);
  return div;
}
