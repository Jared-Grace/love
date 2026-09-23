import { html_div } from "./html_div.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_footer_row_attribute_name } from "./app_shared_footer_row_attribute_name.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_padding_bottom } from "./html_style_padding_bottom.mjs";
import { html_foot_tail_attribute_name } from "./html_foot_tail_attribute_name.mjs";
import { html_attribute_get } from "./html_attribute_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_fixed_bottom_over_spacer } from "./html_fixed_bottom_over_spacer.mjs";
export function app_shared_footer_box(parent) {
  "the empty box the foot of an app's page is built in, holding the room that keeps it away from the reading above it.";
  "The whole foot comes under whatever the reader actually came for, so it keeps a gap above it - without one it sits tight against the end of the reading and reads as one more of the things there, and a thumb travelling to the last button lands on it by mistake.";
  "The buttons go in a box of their own rather than straight onto the page, because a screen that draws itself again has to take the previous foot away first, and one thing to take away cannot half-happen the way two can.";
  "Its buttons go in a row inside it, and that row is pinned to the very bottom of the screen, so the two ways out are always in reach - on a short page too, where something held from inside the page would sit partway up, right under the last line. The box itself stays in the page at the row's height, so the end of a long page can still scroll clear of the row.";
  "Inside a held foot the row is not pinned again: the frame already holds that foot at the bottom of the screen, and a second pin would pull the row out of the foot it was put in.";
  "The row keeps a gap under itself as well, so its buttons do not end flush against the bottom edge of the screen. Only a gap, not the strip a phone's browser bar can take: a thing held against the bottom of the screen is held above that bar already, and room for the bar would stand as an empty band under the buttons the whole time.";
  let footer = html_div(parent);
  let gap = app_shared_spaced_gap();
  html_style_margin_top(footer, gap);
  let row = html_div(footer);
  let name = app_shared_footer_row_attribute_name();
  html_attribute_set(row, name, "");
  html_style_padding_bottom(row, gap);
  let held_name = html_foot_tail_attribute_name();
  let held = html_attribute_get(parent, held_name);
  if (null_not_is(held)) {
    return footer;
  }
  let background = app_shared_color_page_background();
  html_style_set(row, "background-color", background);
  html_fixed_bottom_over_spacer(footer, row);
  return footer;
}
