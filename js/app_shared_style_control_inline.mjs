import { app_shared_spaced_neighbor_gap } from "./app_shared_spaced_neighbor_gap.mjs";
import { app_shared_border_radius_large } from "./app_shared_border_radius_large.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_style_control_inline(component) {
  let border_radius = app_shared_border_radius_large();
  html_style_assign(component, {
    "border-radius": border_radius,
    padding: "0.3em",
    display: "inline-block",
    "border-width": "0px",
    margin: app_shared_spaced_neighbor_gap(),
  });
}
