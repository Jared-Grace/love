import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { html_border_radius_em } from "./html_border_radius_em.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_a_control_style(component) {
  let border_radius = "0.8";
  html_border_radius_em(component, border_radius);
  html_style_set(component, "border-width", "0px");
  ("the room a control keeps above and below itself is the thinnest measure on the shared scale - it was written here as the two pixels that measure comes to on a page at its usual size");
  let gap = app_shared_spaced_frame_gap();
  html_style_margin_y(component, gap);
}
