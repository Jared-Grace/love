import { html_style_justify_self } from "./html_style_justify_self.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { add_1_period } from "./add_1_period.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_number_gutter } from "./app_shared_number_gutter.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_button_numbered(root, index, on_click, with_marker) {
  "a wide list button: the 1-based number right-aligned and de-emphasized in a fixed left gutter so the numbers line up on their periods as a tidy column, then the row's title centered in the rest of the row; when with_marker is true a fixed slot sits between the number gutter and the title for a status marker (a completed check, a 'do this next' arrow) so showing or hiding it never shifts the number or the title; sharing this keeps every app's numbered list consistent for free - returns the button, the number span, the marker slot (null when with_marker is false), and the title slot";
  let button = app_shared_button_wide(root, "", on_click);
  let gutter = app_shared_number_gutter();
  let text = add_1_period(index);
  let number = html_span_text(button, text);
  html_style_justify_self(number, "end");
  app_shared_text_deemphasized(number);
  let marker_slot = null;
  let columns = text_combine_multiple([gutter, " 1fr"]);
  if (with_marker) {
    marker_slot = html_span_text(button, "");
    html_style_justify_self(marker_slot, "center");
    columns = text_combine_multiple([gutter, " ", gutter, " 1fr"]);
  }
  let title = html_span_text(button, "");
  html_style_justify_self(title, "center");
  html_centered(title);
  html_style_line_height(title, 1.5);
  html_style_assign(button, {
    display: "grid",
    "grid-template-columns": columns,
    "align-items": "center",
  });
  let result = {
    button,
    number,
    marker: marker_slot,
    title,
  };
  return result;
}
