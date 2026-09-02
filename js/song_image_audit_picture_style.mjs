import { arguments_assert } from "./arguments_assert.mjs";
import { html_img_lazy_full_block } from "./html_img_lazy_full_block.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
export function song_image_audit_picture_style(picture) {
  "how one couplet's drawing is dressed on the pages that review it: the full width of its column, its corners rounded, and left unfetched until it is nearly on screen";
  "IT IS LAZY AND ASYNC BECAUSE THERE ARE THIRTY-TWO OF THESE ON THE PAGE and every one is a full square drawing about a thousand pixels on a side, shown at a fraction of that. Loaded eagerly the browser holds all thirty-two decoded at once, which is what made the page heavy to scroll; lazy leaves a row's drawing unfetched until it is nearly on screen, and async keeps the decoding off the thread that is doing the scrolling. The arrows still work, because changing the address of an image already on screen fetches straight away.";
  arguments_assert(arguments, 1);
  html_img_lazy_full_block(picture);
  html_border_radius(picture, "8px");
}
