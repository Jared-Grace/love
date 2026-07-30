import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_content_center_padding_gap(component, column, gap) {
  "the same centering the twin without the last word does - full width box, content held in a column of the given width - with the narrow-screen breathing space asked for rather than assumed";
  "on a screen wider than the column the padding is whatever it takes to centre the";
  "column, and this gap is not reached at all. It only decides the narrow case,";
  "which is a phone, and how much of a phone's width a screen can afford to spend";
  "on its edges is a thing each screen knows and this one does not.";
  let pad = text_combine_multiple([
    "max(",
    gap,
    ", calc((100vw - ",
    column,
    ") / 2))",
  ]);
  html_style_padding_x(component, pad);
}
