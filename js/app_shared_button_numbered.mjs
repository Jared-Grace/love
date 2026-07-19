import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { html_span_text } from "../../love/js/html_span_text.mjs";
import { html_style_assign } from "../../love/js/html_style_assign.mjs";
import { html_style_set } from "../../love/js/html_style_set.mjs";
import { add_1_period } from "../../love/js/add_1_period.mjs";
import { app_shared_text_deemphasized } from "../../love/js/app_shared_text_deemphasized.mjs";
import { app_shared_number_gutter } from "../../love/js/app_shared_number_gutter.mjs";
import { text_combine_multiple } from "../../love/js/text_combine_multiple.mjs";
export function app_shared_button_numbered(root, index, on_click, with_marker) {
  "a wide list button whose 1-based number is right-aligned and de-emphasized in a fixed gutter so the numbers line up on their periods, then the row's content sits LEFT-aligned right next to its number so there is no gap between a number and its name; when with_marker is true a fixed slot sits between the number and the content for an optional status marker (a completed check, a 'do this next' arrow) so showing or hiding a marker never shifts the number or the content; sharing this keeps every app's numbered list consistent for free - returns the button, the number span, the marker slot (null when with_marker is false), and the title slot";
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
  html_style_set(title, "justify-self", "start");
  html_style_set(title, "text-align", "start");
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
