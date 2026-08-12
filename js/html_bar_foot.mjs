import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { html_div } from "./html_div.mjs";
export function html_bar_foot(shell) {
  "A band along the bottom of a bar-and-content frame - the same fixed-height row the bar at the top is, placed under the scrolling body instead of over it.";
  "A line that comes and goes belongs here rather than in the top bar. Appearing in the top bar, its height is taken off the body from ABOVE, so every line the reader was reading slides down at the moment they tap - and what they were looking at is no longer where they left it. Taken off the bottom instead, the top of the body does not move at all.";
  arguments_assert(arguments, 1);
  let foot = html_div(shell);
  html_style_flex(foot, "0 0 auto");
  return foot;
}
