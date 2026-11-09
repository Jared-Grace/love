import { html_div } from "./html_div.mjs";
import { app_learn_js_column_cap_width } from "./app_learn_js_column_cap_width.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_learn_js_container_light_blue_border_color } from "./app_learn_js_container_light_blue_border_color.mjs";
import { app_shared_spaced_neighbor_gap } from "./app_shared_spaced_neighbor_gap.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_border_radius_large } from "./app_shared_border_radius_large.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
export function app_learn_js_container_light_blue(parent) {
  "bounded to the content column and centered, NOT a full-bleed band: on a wide desktop the blue should respect the app width instead of stretching edge to edge. The width caps at the content column and auto side-margins center it; on a narrow screen it fills the width. A full rounded border finishes the now-visible left and right sides so it reads as a card";
  let c = html_div(parent);
  ("the same width as the full-column buttons below it, border included, chosen by the human 2026-11-09: the card used to pull in by a wider gap than the buttons, so on a phone it stood narrower than they did. Sized the way those buttons are: it fills its parent, and the buttons' cap is its max-width, so on a phone both fill the same parent and on a wide screen both stop at the same cap. Auto side-margins center it. Inner padding is EQUAL on all four sides so the content sits the same distance from every border");
  let cap = app_learn_js_column_cap_width();
  let inner = app_shared_spaced_small_gap();
  let edge = app_shared_spaced_small_gap();
  html_style_assign(c, {
    width: "100%",
    "max-width": cap,
    "box-sizing": "border-box",
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
  let border_color = app_learn_js_container_light_blue_border_color();
  let border_width = app_shared_spaced_neighbor_gap();
  html_border(c, border_width, border_color);
  let border_radius = app_shared_border_radius_large();
  html_border_radius(c, border_radius);
  return c;
}
