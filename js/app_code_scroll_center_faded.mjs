import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
import { sleep } from "./sleep.mjs";
import { html_viewport_width_full } from "./html_viewport_width_full.mjs";
import { html_viewport_height_full } from "./html_viewport_height_full.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_scroll_center_now } from "./html_scroll_center_now.mjs";
export async function app_code_scroll_center_faded(component) {
  "cover the screen with white INSTANTLY (opacity 1 at creation, so the top-scrolled list is never painted), snap the just-left lesson to center while hidden behind the white, then FADE the white OUT to reveal the already-centered list. Only the reveal fades - the white must appear at once, not fade in, because fading it in would let the top-scrolled list show through the half-transparent white first (which looked like 'scrolled up, then white, then scrolled properly')";
  let cover = html_body_div();
  html_style_assign(cover, {
    position: "fixed",
    top: "0",
    left: "0",
    width: html_viewport_width_full(),
    height: html_viewport_height_full(),
    background: "white",
    "z-index": "1000",
    opacity: "1",
    transition: "opacity 0.28s ease",
    "pointer-events": "none",
  });
  await html_scroll_center_now(component);
  ("one animation frame, so the fully-white state is committed before we start fading it out - otherwise the browser may coalesce and skip the transition (which read as 'no fade')");
  ("the shared frame rather than a bare requestAnimationFrame of our own: a hidden tab is never given a frame at all, and the bare one parked this whole function there forever - the white cover stayed at full opacity over the list, and everything the refresh does after the screen returns, the url in the address bar and the contact button among it, never ran. The shared one races the frame against a short timeout, so a tab in the background finishes drawing instead of waiting to be looked at");
  await html_request_animation_frame();
  html_style_opacity(cover, "0");
  await sleep(280);
  html_remove(cover);
}
