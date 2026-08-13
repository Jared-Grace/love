import { app_shared_button_numbered_gutter } from "./app_shared_button_numbered_gutter.mjs";
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
  "a wide list button: the 1-based number right-aligned and de-emphasized in a fixed left gutter so the numbers line up on their periods as a tidy column, then the row's title centered on the row itself, the left gutters mirrored by empty ones on the right to keep it there; when with_marker is true a fixed slot sits between the number gutter and the title for a status marker (a completed check, a 'do this next' arrow) so showing or hiding it never shifts the number or the title; sharing this keeps every app's numbered list consistent for free - returns the button, the number span, the marker slot (null when with_marker is false), and the title slot";
  let button = app_shared_button_wide(root, "", on_click);
  ("the number column and the marker column are sized apart on purpose: the number has to hold three digits and a period, while the marker holds one emoji, so one width cannot be right for both");
  let gutter = app_shared_button_numbered_gutter();
  let marker_gutter = app_shared_number_gutter();
  let text = add_1_period(index);
  let number = html_span_text(button, text);
  html_style_justify_self(number, "end");
  app_shared_text_deemphasized(number);
  ("the gutters are MIRRORED on the right, as empty tracks with nothing placed in them. Centering the title inside whatever is left over centers it in the row minus the gutters, which is not the middle of the row - the title reads pushed to the right by exactly the width of the number, and the further the list runs the wider that gutter and the worse it looks. An equal track on the far side puts the 1fr back in the middle, so the title is centered on the row itself while the number still sits hard left");
  ("empty tracks rather than a spacer element, because grid places items into the tracks in order and simply stops - a track with no item is width and nothing else, which is the whole of what is wanted here");
  let marker_slot = null;
  let columns = text_combine_multiple([gutter, " 1fr ", gutter]);
  if (with_marker) {
    marker_slot = html_span_text(button, "");
    html_style_justify_self(marker_slot, "center");
    columns = text_combine_multiple([
      gutter,
      " ",
      marker_gutter,
      " 1fr ",
      marker_gutter,
      " ",
      gutter,
    ]);
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
