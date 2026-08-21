import { html_scroll_tail_height } from "./html_scroll_tail_height.mjs";
import { html_style_padding_bottom } from "./html_style_padding_bottom.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_shared_footer_box(parent) {
  "the empty box the foot of an app's page is built in, holding the room that keeps it away from the reading above it.";
  "The whole foot comes under whatever the reader actually came for, so it keeps a gap above it - without one it sits tight against the end of the reading and reads as one more of the things there, and a thumb travelling to the last button lands on it by mistake.";
  "The buttons go in a box of their own rather than straight onto the page, because a screen that draws itself again has to take the previous foot away first, and one thing to take away cannot half-happen the way two can.";
  "It keeps room under itself as well, because it is the last thing on the page and a phone's browser bar sits over the bottom strip of the screen. Without that room the last button ends exactly at the bottom edge - reachable on a desktop, and covered by the bar on the phone this is for.";
  let footer = html_div(parent);
  let gap = app_shared_spaced_gap();
  html_style_margin_top(footer, gap);
  let tail = html_scroll_tail_height();
  html_style_padding_bottom(footer, tail);
  return footer;
}
