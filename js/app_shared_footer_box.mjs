import { html_div } from "./html_div.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_padding_bottom } from "./html_style_padding_bottom.mjs";
import { html_foot_tail_attribute_name } from "./html_foot_tail_attribute_name.mjs";
import { html_attribute_get } from "./html_attribute_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_bottom_when_short } from "./html_bottom_when_short.mjs";
export function app_shared_footer_box(parent) {
  "the empty box the foot of an app's page is built in, holding the room that keeps it away from the reading above it.";
  "The whole foot comes under whatever the reader actually came for, so it keeps a gap above it - without one it sits tight against the end of the reading and reads as one more of the things there, and a thumb travelling to the last button lands on it by mistake.";
  "The buttons go in a box of their own rather than straight onto the page, because a screen that draws itself again has to take the previous foot away first, and one thing to take away cannot half-happen the way two can.";
  "It is met at the end of the reading rather than held in sight, and on a page too short to reach the bottom of the screen it goes to the bottom of the screen rather than floating under the last line. In the place a frame keeps for it that is already so - the frame stretches the reading to fill the screen - so it is only pushed down itself on the pages whose frame does not.";
  "It keeps a gap under itself as well, so its buttons do not end flush against the bottom edge of the screen. Only a gap, not the strip a phone's browser bar can take: on a short page that strip would make the page one strip too tall to fit, so it would scroll for nothing; on a long page the bar gives the strip back as the reader scrolls down to the end.";
  let footer = html_div(parent);
  let gap = app_shared_spaced_gap();
  html_style_margin_top(footer, gap);
  html_style_padding_bottom(footer, gap);
  let name = html_foot_tail_attribute_name();
  let tail = html_attribute_get(parent, name);
  if (null_not_is(tail)) {
    return footer;
  }
  html_bottom_when_short(footer);
  return footer;
}
