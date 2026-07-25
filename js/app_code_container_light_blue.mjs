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
  ("bounded to the content column and centered, NOT a full-bleed band: on a wide desktop the blue should respect the app width instead of stretching edge to edge. The width caps at the content column and auto side-margins center it; on a narrow screen it fills the width. A full rounded border finishes the now-visible left and right sides so it reads as a card");
  let c = html_div(parent);
  let column = app_shared_column_content_max_width();
  let gap = app_shared_spaced_gap();
  html_style_assign(c, {
    "max-width": column,
    "margin-top": "0.5em",
    "margin-bottom": "0.5em",
    "margin-left": "auto",
    "margin-right": "auto",
    "padding-top": "0.2em",
    "padding-bottom": "0.2em",
    "padding-left": gap,
    "padding-right": gap,
    display: "flex",
    "flex-direction": "column",
  });
  let background = app_shared_container_blue_background_color();
  html_style_background_color_set(c, background);
  let border_color = app_code_container_light_blue_border_color();
  html_border(c, "0.15em", border_color);
  html_border_radius(c, app_shared_border_radius_large());
  app_code_flex_gap(c);
  return c;
}
