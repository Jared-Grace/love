import { app_code_container_light_blue_border_color } from "../../../love/public/src/app_code_container_light_blue_border_color.mjs";
import { app_code_flex_gap } from "../../../love/public/src/app_code_flex_gap.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_border_y } from "../../../love/public/src/html_border_y.mjs";
import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { html_border_none } from "../../../love/public/src/html_border_none.mjs";
import { html_style_padding } from "../../../love/public/src/html_style_padding.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
export function app_code_container_light_blue(parent) {
  let container2 = html_div(parent);
  html_style_padding(container2, "0.2em");
  html_border_none(container2);
  let c = container2;
  html_style_background_color_set(c, "rgb(228, 241, 255)");
  let border_color = app_code_container_light_blue_border_color();
  html_border_y(c, "0.15em", border_color);
  html_style_margin_y(c, "0.5em");
  html_style_assign(c, {
    display: "flex",
    flexDirection: "column",
  });
  app_code_flex_gap(c);
  return c;
}
