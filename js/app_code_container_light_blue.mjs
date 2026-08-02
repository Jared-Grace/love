import { app_shared_spaced_neighbor_gap } from "./app_shared_spaced_neighbor_gap.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_border_radius_large } from "./app_shared_border_radius_large.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { app_shared_column_content_max_width } from "./app_shared_column_content_max_width.mjs";
import { app_code_container_light_blue_border_color } from "./app_code_container_light_blue_border_color.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
export function app_code_container_light_blue(parent) {
  "bounded to the content column and centered, NOT a full-bleed band: on a wide desktop the blue should respect the app width instead of stretching edge to edge. The width caps at the content column and auto side-margins center it; on a narrow screen it fills the width. A full rounded border finishes the now-visible left and right sides so it reads as a card";
  let c = html_div(parent);
  let column = app_shared_column_content_max_width();
  ("width caps at the column on a wide screen and pulls in by the outer gap on each side on a narrow one, so the card never hugs the screen edge; auto side-margins center it. Inner padding is EQUAL on all four sides so the content sits the same distance from every border");
  let outer = app_shared_spaced_gap();
  let inner = app_shared_spaced_small_gap();
  let edge = app_shared_spaced_small_gap();
  let width = text_combine_multiple([
    "min(",
    column,
    ", calc(100% - ",
    outer,
    " - ",
    outer,
    "))",
  ]);
  html_style_assign(c, {
    width,
    "margin-top": edge,
    "margin-bottom": edge,
    "margin-left": "auto",
    "margin-right": "auto",
    padding: inner,
    gap: inner,
    display: "flex",
    "flex-direction": "column",
  });
  let background = app_shared_container_blue_background_color();
  html_style_background_color_set(c, background);
  let border_color = app_code_container_light_blue_border_color();
  html_border(c, app_shared_spaced_neighbor_gap(), border_color);
  let border_radius = app_shared_border_radius_large();
  html_border_radius(c, border_radius);
  return c;
}
