import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
export function song_image_audit_picture_strip(parent) {
  "the row of controls belonging to one couplet's picture - the arrows, the attempt number and the keep press - made empty for the caller to fill";
  "IT IS MADE BEFORE THE PICTURE SO THAT IT SITS ABOVE IT, and that ordering is the whole reason this is its own function rather than a line in the caller. The drawings are not all the same height, so a strip underneath one moves up and down the screen every time an arrow is pressed - which means the button under the pointer is no longer the button that was just pressed, and a second press lands on whatever slid into its place. A control that is moved by the change it makes cannot be pressed twice in a row, and looking at eighty attempts is nothing but pressing one button eighty times.";
  arguments_assert(arguments, 1);
  let strip = html_div(parent);
  html_style_margin_bottom(strip, "8px");
  return strip;
}
