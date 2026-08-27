import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_row_wrapping } from "./song_image_row_wrapping.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { song_image_color_border_resting } from "./song_image_color_border_resting.mjs";
import { html_border_top } from "./html_border_top.mjs";
import { html_style_padding_top } from "./html_style_padding_top.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { song_image_audit_picture } from "./song_image_audit_picture.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
export function song_image_row_picture_columns(parent, key, kept) {
  "One couplet's band on any of the hymn's pages: a rule across the top, the drawing in a column of its own on the left with its arrows and its keep press, and a wider column beside it for whatever that page has to say - handed back so the caller can fill either column.";
  "THE DRAWING IS BESIDE THE WORDS AND NOT ABOVE THEM, because every question these pages ask is a comparison. Whether the picture says what the couplet says, whether this attempt beats the last one, whether the fault reported against it is still there - none of those can be held in the head across a scroll, and a picture run to the full width of the column puts one screen between itself and the words it is being judged against.";
  "IT WRAPS RATHER THAN SHRINKS when the screen is narrow, so a phone gets the picture and then the words underneath at full size rather than two columns squeezed to nothing.";
  "IT IS ONE FUNCTION FOR EVERY SUCH PAGE because the bands have to agree by construction. Two pages a few pixels apart in their rule, their gap or their picture width is not a fault anybody reports, and it is exactly the difference a reader feels without being able to name it - and the second page always drifts, because whoever changes the first has no reason to open the second.";
  arguments_assert(arguments, 3);
  let row = song_image_row_wrapping(parent);
  html_style_margin_top(row, "38px");
  let resting = song_image_color_border_resting();
  html_border_top(row, "1px", resting);
  html_style_padding_top(row, "22px");
  let left = html_div(row);
  html_style_set(left, "width", "260px");
  song_image_audit_picture(left, key, kept);
  let right = html_div(row);
  html_style_flex(right, "1 1 340px");
  let columns = {
    row,
    left,
    right,
  };
  return columns;
}
