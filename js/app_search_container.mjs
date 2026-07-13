import { app_shared_container_base } from "./app_shared_container_base.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_border_style } from "./html_border_style.mjs";
import { html_border } from "./html_border.mjs";
import { app_search_container_border_color } from "./app_search_container_border_color.mjs";
export function app_search_container(parent) {
  let div = app_shared_container_base(parent);
  html_style_background_color_set(div, "white");
  html_border_style(div, "solid");
  html_border(div, "0.1em", app_search_container_border_color());
  return div;
}
