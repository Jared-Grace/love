import { html_border_none } from "./html_border_none.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { app_shared_border_radius_large } from "./app_shared_border_radius_large.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
export function app_code_container_generic_style(container) {
  html_style_padding(container, "0.2em");
  html_border_radius(container, app_shared_border_radius_large());
  html_border_none(container);
}
