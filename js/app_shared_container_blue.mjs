import { app_shared_container_blue_inside_is } from "./app_shared_container_blue_inside_is.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
import { app_shared_container_blue_medium_background_color } from "./app_shared_container_blue_medium_background_color.mjs";
import { app_shared_container_base } from "./app_shared_container_base.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
export function app_shared_container_blue(parent) {
  "a blue card drawn straight inside a light blue one takes the next shade down, so the two read as one inside the other rather than as one field - the same steps the search results take by hand, asked here once so every page nesting these cards gets them";
  let inside = app_shared_container_blue_inside_is(parent);
  let background = app_shared_container_blue_background_color();
  if (inside) {
    background = app_shared_container_blue_medium_background_color();
  }
  let div = app_shared_container_base(parent);
  html_style_background_color_set(div, background);
  let border_width = app_shared_spaced_frame_gap();
  let border_color = app_shared_color_blue_pale();
  html_border(div, border_width, border_color);
  return div;
}
