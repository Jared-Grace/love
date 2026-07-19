import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { html_span_text } from "../../love/js/html_span_text.mjs";
import { html_style_assign } from "../../love/js/html_style_assign.mjs";
import { html_style_set } from "../../love/js/html_style_set.mjs";
import { add_1_period } from "../../love/js/add_1_period.mjs";
import { app_shared_text_deemphasized } from "../../love/js/app_shared_text_deemphasized.mjs";
import { app_shared_number_gutter } from "../../love/js/app_shared_number_gutter.mjs";
import { text_combine_multiple } from "../../love/js/text_combine_multiple.mjs";
export function app_shared_button_numbered(root, index, on_click, with_marker) {
  "a wide list button: the 1-based number right-aligned and de-emphasized in a fixed left gutter so the numbers line up on their periods as a tidy column, then the row's title centered in the rest of the row; when with_marker is true a fixed slot sits between the number gutter and the title for a status marker (a completed check, a 'do this next' arrow) so showing or hiding it never shifts the number or the title; sharing this keeps every app's numbered list consistent for free - returns the button, the number span, the marker slot (null when with_marker is false), and the title slot";
  let button = app_shared_button_wide(root, "", on_click);
  let gutter = app_shared_number_gutter();
  let number = html_span_text(button, add_1_period(index));
  html_style_set(number, "justify-self", "end");
  app_shared_text_deemphasized(number);
  let marker = null;
  let columns = text_combine_multiple([gutter, " 1fr"]);
  if (with_marker) {
    marker = html_span_text(button, "");
    html_style_set(marker, "justify-self", "center");
    columns = text_combine_multiple([gutter, " ", gutter, " 1fr"]);
  }
  let title = html_span_text(button, "");
  html_style_set(title, "justify-self", "center");
  html_style_set(title, "text-align", "center");
  html_style_set(title, "line-height", 1.5);
  html_style_assign(button, {
    display: "grid",
    "grid-template-columns": columns,
    "align-items": "center",
  });
  let result = {
    button,
    number,
    marker,
    title,
  };
  return result;
}
