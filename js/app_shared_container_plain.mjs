import { app_shared_container_base } from "./app_shared_container_base.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_container_plain_border_color } from "./app_shared_container_plain_border_color.mjs";
import { app_shared_container_plain_background_color } from "./app_shared_container_plain_background_color.mjs";
export function app_shared_container_plain(parent) {
  let div = app_shared_container_base(parent);
  html_style_background_color_set(div, app_shared_container_plain_background_color());
  html_border(div, "0.1em", app_shared_container_plain_border_color());
  return div;
}
