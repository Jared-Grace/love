import { week_calendar } from "./week_calendar.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export function week_calendar_preview() {
  ("preview the weekly availability grid on the sandbox app at #",
    week_calendar.name,
    ": click a 30-minute piece, then another piece in the same day, to select the range between them");
  let root = html_body_div();
  let status = html_div_text(
    root,
    "Click a 30-minute piece, then another in the same day, to select a range",
  );
  function on_ranges(ranges) {
    let size = list_size(ranges);
    let text = text_combine_multiple(["Selected ranges: ", size]);
    html_text_set(status, text);
  }
  week_calendar(root, on_ranges);
}
