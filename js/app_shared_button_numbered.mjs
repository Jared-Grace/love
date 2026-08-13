import { app_shared_button_numbered_gutter } from "./app_shared_button_numbered_gutter.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { add_1_period } from "./add_1_period.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_number_gutter } from "./app_shared_number_gutter.mjs";
export function app_shared_button_numbered(root, index, on_click, with_marker) {
  "a wide list button: the 1-based number right-aligned and de-emphasized in a fixed gutter pinned to the left edge so the numbers line up on their periods as a tidy column, and the row's title centered on the whole row; when with_marker is true a fixed slot sits between the number gutter and the title for a status marker (a completed check, a 'do this next' arrow) so showing or hiding it never shifts the number or the title; sharing this keeps every app's numbered list consistent for free - returns the button, the number span, the marker slot (null when with_marker is false), and the title slot";
  let button = app_shared_button_wide(root, "", on_click);
  ("the number column and the marker column are sized apart on purpose: the number has to hold three digits and a period, while the marker holds one emoji, so one width cannot be right for both");
  let gutter = app_shared_button_numbered_gutter();
  let marker_gutter = app_shared_number_gutter();
  html_style_assign(button, {
    position: "relative",
  });
  ("the number and the marker are LIFTED OUT of the row's flow and pinned over its left edge, and the title is the only thing left in it, so the title is centered on the row itself. Laying all three out side by side instead centers the title in what is left AFTER the gutters, which is not the middle of the row - it reads pushed right by half the gutter, and the wider the list gets the worse it looks. Mirroring the gutters on the right does re-center it, but it spends that width twice over and the longest titles start wrapping onto a second line; pinning spends none of it");
  ("a title long enough to reach the number would run under it. In practice it cannot: the title is centered, so a title reaching the left gutter reaches the right edge at the same moment and wraps before it arrives");
  ("each is given the gutter as its own WIDTH rather than being pinned by its left edge alone, because that is what lines the numbers up on their periods - the number is right-aligned inside a fixed box, so a one-digit and a three-digit number end at the same place");
  ("held to the middle of the row's own height rather than left to fall wherever a lifted-out span falls, so a row whose title runs to two lines keeps its number beside the middle of the title instead of up against the top");
  let middle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  };
  let text = add_1_period(index);
  let number = html_span_text(button, text);
  html_style_assign(number, {
    ...middle,
    left: "0",
    width: gutter,
    "text-align": "right",
  });
  app_shared_text_deemphasized(number);
  let marker_slot = null;
  if (with_marker) {
    marker_slot = html_span_text(button, "");
    html_style_assign(marker_slot, {
      ...middle,
      left: gutter,
      width: marker_gutter,
      "text-align": "center",
    });
  }
  let title = html_span_text(button, "");
  html_centered(title);
  html_style_line_height(title, 1.5);
  html_style_assign(button, {
    display: "grid",
    "grid-template-columns": "1fr",
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
