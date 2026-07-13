import { app_shared_container_background_color } from "./app_shared_container_background_color.mjs";
import { html_card } from "./html_card.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_div } from "./html_div.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_container(parent) {
  let div = html_div(parent);
  html_card(div);
  let color = text_combine(app_shared_container_background_color(), "ff");
  html_style_background_color_set(div, color);
  html_style_margin_y(div, "10px");
  return div;
}
