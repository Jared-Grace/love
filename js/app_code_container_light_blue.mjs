import { app_shared_column_content_max_width } from "./app_shared_column_content_max_width.mjs";
import { app_code_container_light_blue_border_color } from "./app_code_container_light_blue_border_color.mjs";
import { app_code_flex_gap } from "./app_code_flex_gap.mjs";
import { app_shared_content_center_padding } from "./app_shared_content_center_padding.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_border_y } from "./html_border_y.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_border_none } from "./html_border_none.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
export function app_code_container_light_blue(parent) {
  let c = html_div(parent);
  html_style_padding_y(c, "0.2em");
  ("full width, but its content centered into the content column (a touch wider than the button cap so nested answer buttons fit)");
  let column = app_shared_column_content_max_width();
  app_shared_content_center_padding(c, column);
  html_border_none(c);
  let background = app_shared_container_blue_background_color();
  html_style_background_color_set(c, background);
  let border_color = app_code_container_light_blue_border_color();
  html_border_y(c, "0.15em", border_color);
  html_style_margin_y(c, "0.5em");
  html_style_assign(c, {
    display: "flex",
    "flex-direction": "column",
  });
  app_code_flex_gap(c);
  return c;
}
