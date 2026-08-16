import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
export function app_shared_hr_spaced(parent) {
  arguments_assert(arguments, 1);
  ("a line drawn right across, standing off from what is above it and from what is below it by the same one gap this app spaces things by");
  ("The room is shared out evenly rather than being left above the line, because a line with everything on one side of it belongs to the thing it is closest to. What it is for is to belong to neither - it is the join between them, and a join is in the middle of what it joins.");
  let line = html_hr(parent);
  let gap = app_shared_spaced_gap();
  html_style_margin_y(line, gap);
  return line;
}
