import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { html_span_text } from "../../love/js/html_span_text.mjs";
import { html_style_assign } from "../../love/js/html_style_assign.mjs";
import { html_style_set } from "../../love/js/html_style_set.mjs";
import { add_1_period } from "../../love/js/add_1_period.mjs";
import { app_shared_text_deemphasized } from "../../love/js/app_shared_text_deemphasized.mjs";
import { app_shared_number_gutter } from "../../love/js/app_shared_number_gutter.mjs";
export function app_shared_button_numbered(root, index, on_click, with_marker) {
  "a wide list button whose content - the 1-based number (de-emphasized), an optional status-marker slot, and the row's title - sits CENTERED as one group, so a number stays right beside its own title with no gap opening between them; when with_marker is true a fixed-width slot is reserved between the number and the title for a status marker (a completed check, a 'do this next' arrow) so showing or hiding a marker never shifts the centered group; sharing this keeps every app's numbered list consistent for free - returns the button, the number span, the marker slot (null when with_marker is false), and the title slot";
  let button = app_shared_button_wide(root, "", on_click);
  let gutter = app_shared_number_gutter();
  html_style_assign(button, {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "column-gap": "0.4em",
  });
  let number = html_span_text(button, add_1_period(index));
  app_shared_text_deemphasized(number);
  let marker = null;
  if (with_marker) {
    marker = html_span_text(button, "");
    html_style_set(marker, "min-width", gutter);
    html_style_set(marker, "text-align", "center");
  }
  let title = html_span_text(button, "");
  html_style_set(title, "text-align", "center");
  html_style_set(title, "line-height", 1.5);
  let result = {
    button,
    number,
    marker,
    title,
  };
  return result;
}
