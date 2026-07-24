import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_content_center_padding(component, column) {
  "keep a component FULL WIDTH (so its band, borders, and any scrollbar span the whole window) while pushing its content into a centered column of the given width: horizontal padding grows to (viewport - column)/2 on a wide screen and shrinks to the normal gap on a narrow one. So the box is full width, but the text and buttons inside line up in one column. Viewport-based so a width:100% button inside lands exactly at the column width";
  let gap = app_shared_spaced_gap();
  let pad = text_combine_multiple([
    "max(",
    gap,
    ", calc((100vw - ",
    column,
    ") / 2))",
  ]);
  html_style_padding_x(component, pad);
}
