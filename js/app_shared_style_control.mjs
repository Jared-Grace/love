import { app_shared_border_radius_large } from "./app_shared_border_radius_large.mjs";
import { app_shared_style_control_font_size } from "./app_shared_style_control_font_size.mjs";
import { app_shared_margin_y_set } from "./app_shared_margin_y_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_style_control(component) {
  let border_radius = app_shared_border_radius_large();
  html_style_assign(component, {
    "border-radius": border_radius,
    padding: "0.55em",
    width: "100%",
    "border-width": "0px",
    "font-size": app_shared_style_control_font_size(),
  });
  app_shared_margin_y_set(component);
}
