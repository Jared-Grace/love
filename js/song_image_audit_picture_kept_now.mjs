import { arguments_assert } from "./arguments_assert.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_align_items_center } from "./html_align_items_center.mjs";
export function song_image_audit_picture_kept_now(strip, kept) {
  arguments_assert(arguments, 2);
  html_display_flex(strip);
  html_style_gap(strip, "8px");
  html_style_margin_top(strip, "8px");
  html_align_items_center(strip);
  let kept_now = kept;
  return kept_now;
}
