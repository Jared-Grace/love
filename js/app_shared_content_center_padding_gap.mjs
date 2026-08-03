import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { app_shared_content_center_padding_value } from "./app_shared_content_center_padding_value.mjs";
export function app_shared_content_center_padding_gap(component, column, gap) {
  "the same centering the twin without the last word does - full width box, content held in a column of the given width - with the narrow-screen breathing space asked for rather than assumed";
  "on a screen wider than the column the padding is whatever it takes to centre the";
  "column, and this gap is not reached at all. It only decides the narrow case,";
  "which is a phone, and how much of a phone's width a screen can afford to spend";
  "on its edges is a thing each screen knows and this one does not.";
  let pad = app_shared_content_center_padding_value(column, gap);
  html_style_padding_x(component, pad);
}
