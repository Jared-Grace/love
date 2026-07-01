import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { html_border_top } from "../../../love/public/src/html_border_top.mjs";
import { html_border_none } from "../../../love/public/src/html_border_none.mjs";
import { html_style_padding } from "../../../love/public/src/html_style_padding.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
export function app_code_container_light_blue(parent) {
  let container2 = html_div(parent);
  html_style_padding(container2, "0.2em");
  html_border_none(container2);
  let container = container2;
  html_style_background_color_set(container, "rgb(209, 231, 253)");
  html_border_top(container, "0.15em", "black");
  html_style_margin_y(container, "0.5em");
  return container;
}
