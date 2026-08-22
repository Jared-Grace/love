import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function song_image_row_wrapping(parent) {
  "A row that lays its children out side by side, tops level, and drops the ones that will not fit onto a line beneath - the shape every side-by-side band on the hymn's pages is built in.";
  "THE FOUR SETTINGS BELONG TOGETHER AND WERE WRITTEN OUT APART. Side by side, a gap between, tops level, wrap when narrow: leave out the last one and a phone shows a row squeezed to nothing rather than stacked, and leave out the third and a short column sits centred against a tall picture. Nothing goes red either way - the page simply looks wrong on the one screen nobody is testing on.";
  "THE GAP IS SPELLED HERE ONCE so the bands agree with each other by construction. Two bands a few pixels apart is not a fault anybody reports, and it is exactly the difference a reader feels without being able to name it.";
  arguments_assert(arguments, 1);
  let row = html_div(parent);
  html_display_flex(row);
  html_style_gap(row, "22px");
  html_style_set(row, "align-items", "flex-start");
  html_style_set(row, "flex-wrap", "wrap");
  return row;
}
