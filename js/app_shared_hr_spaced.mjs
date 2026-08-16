import { html_border_none } from "./html_border_none.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_border_top } from "./html_border_top.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
export function app_shared_hr_spaced(parent) {
  arguments_assert(arguments, 1);
  ("a line drawn right across, standing off from what is above it and from what is below it by the same one gap this app spaces things by");
  ("The room is shared out evenly rather than being left above the line, because a line with everything on one side of it belongs to the thing it is closest to. What it is for is to belong to neither - it is the join between them, and a join is in the middle of what it joins.");
  ("drawn in the app's own blue rather than in the grey a page gives a rule by default, so it reads as part of what it is dividing rather than as a seam left where two pieces were put together");
  ("The deep blue the labels on blue cards are written in, because that is what a mark ON a blue card is already made of here - the same blue the card says Code: in, said as a line instead of as a word.");
  ("One hairline, and the page's own doubled edge taken off first: a rule left as a page draws it is two lines of shading pretending to be carved into the paper, and a colour given to that is a colour given to a groove.");
  let line = html_hr(parent);
  html_border_none(line);
  let color = app_shared_color_blue_dark();
  html_border_top(line, "1px", color);
  let gap = app_shared_spaced_gap();
  html_style_margin_y(line, gap);
  return line;
}
