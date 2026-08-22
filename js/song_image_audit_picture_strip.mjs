import { arguments_assert } from "./arguments_assert.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_div } from "./html_div.mjs";
export function song_image_audit_picture_strip(picture, parent) {
  arguments_assert(arguments, 2);
  html_attribute_set(picture, "loading", "lazy");
  html_attribute_set(picture, "decoding", "async");
  html_width_full(picture);
  html_display_block(picture);
  html_border_radius(picture, "8px");
  let strip = html_div(parent);
  return strip;
}
