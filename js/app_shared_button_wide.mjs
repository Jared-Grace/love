import { html_width_full } from "../../love/js/html_width_full.mjs";
import { html_style_margin_x } from "../../love/js/html_style_margin_x.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
export function app_shared_button_wide(parent, text, lambda) {
  let b = app_shared_button(parent, text, lambda);
  html_width_full(b);
  "a plain button carries a small side margin for spacing when buttons sit in a row; on a full-width (100%) button that side margin lives OUTSIDE the border-box and pushes the button past the viewport, which is what created the horizontal scrollbar - so zero it (the vertical margin stays, spacing the stacked wide buttons)";
  html_style_margin_x(b, "0");
  return b;
}
