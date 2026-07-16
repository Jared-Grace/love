import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { html_span_text } from "../../love/js/html_span_text.mjs";
import { html_style_assign } from "../../love/js/html_style_assign.mjs";
import { html_style_set } from "../../love/js/html_style_set.mjs";
import { add_1_period } from "../../love/js/add_1_period.mjs";
import { app_shared_text_deemphasized } from "../../love/js/app_shared_text_deemphasized.mjs";
import { app_shared_number_gutter } from "../../love/js/app_shared_number_gutter.mjs";
import { text_combine_multiple } from "../../love/js/text_combine_multiple.mjs";
export function app_shared_button_numbered(root, index, on_click) {
  "a wide list button laid out as three columns: the 1-based number, right-aligned and de-emphasized in a fixed gutter so the numbers line up on their periods; a fixed slot for an optional status marker, so a marker never shifts the number or the content; then the row's content, centered; sharing this keeps every app's numbered list identical for free - returns the button, the number span, the marker slot, and the title slot";
  let button = app_shared_button_wide(root, "", on_click);
  let gutter = app_shared_number_gutter();
  let columns = text_combine_multiple([gutter, " ", gutter, " 1fr"]);
  html_style_assign(button, {
    display: "grid",
    "grid-template-columns": columns,
    "align-items": "center",
  });
  let number = html_span_text(button, add_1_period(index));
  html_style_set(number, "justify-self", "end");
  app_shared_text_deemphasized(number);
  let marker = html_span_text(button, "");
  html_style_set(marker, "justify-self", "center");
  let title = html_span_text(button, "");
  html_style_set(title, "justify-self", "center");
  html_style_set(title, "line-height", 1.5);
  let result = {
    button,
    number,
    marker,
    title,
  };
  return result;
}
