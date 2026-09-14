import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
export function lyric_timing_screen_times(parent) {
  "$plain parent";
  "The times tapped so far, in a short box of their own that scrolls, sitting under the big button.";
  "IT IS A FIXED HEIGHT THAT SCROLLS RATHER THAN A LIST THAT GROWS. A psalm runs to dozens of lines, and a list allowed to grow pushes the big button off the bottom of the screen - which is the one thing on this page that must never move, because it is being pressed by somebody who is listening rather than looking.";
  "It is here so a bad tap is caught while catching it is still cheap. Two lines a tenth of a second apart are obviously wrong the moment they are written down, and seeing that now costs one press of back, where seeing it after the video is rendered costs the whole render.";
  "It is tall enough to show several lines at once and is not dimmed, because its rows are now pressed as well as read - a line is picked there and its time stepped there - and a dimmed button reads as a switched-off one.";
  "It is positioned as its own frame so that the place of a row inside it can be measured from its top, which is how the marked line is brought into the middle of the box.";
  let times = html_div(parent);
  html_style_set(times, "max-height", "18em");
  html_style_set(times, "overflow-y", "auto");
  html_style_set(times, "position", "relative");
  html_style_font_size(times, "0.95em");
  return times;
}
