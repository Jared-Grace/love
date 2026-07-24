import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_content_center_padding(component) {
  "keep a light-blue box FULL WIDTH (its band and top/bottom border span the whole window) while pushing its content into the same centered column as the buttons: horizontal padding grows to (viewport - column)/2 on a wide screen and shrinks to the normal gap on a narrow one. So the box is full width, but the text and the dark code tile inside line up with the buttons (a ~40rem centered column). Viewport-based so it tracks the button cap";
  let gap = app_shared_spaced_gap();
  let pad = text_combine_multiple([
    "max(",
    gap,
    ", calc((100vw - 40rem) / 2))",
  ]);
  html_style_padding_x(component, pad);
}
