import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
export function app_shared_button_spaced(parent, text, lambda) {
  "A button with a little air either side of it, for the case where several sit in a row on one line and would otherwise touch.";
  "The gap is on the buttons rather than on the row that holds them, so a row can be built out of whatever it likes and the spacing still happens - and a thumb aiming at one of them does not land on its neighbour.";
  let component = app_shared_button(parent, text, lambda);
  let gap = app_shared_spaced_tiny_gap();
  html_style_margin_x(component, gap);
  return component;
}
