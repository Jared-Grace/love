import { html_img_lazy_full_block } from "./html_img_lazy_full_block.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_div } from "./html_div.mjs";
export function song_image_audit_picture_strip(picture, parent) {
  arguments_assert(arguments, 2);
  html_img_lazy_full_block(picture);
  html_border_radius(picture, "8px");
  let strip = html_div(parent);
  return strip;
}
