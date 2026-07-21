import { html_body_div } from "./html_body_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_scroll_center_now } from "./html_scroll_center_now.mjs";
export async function app_code_scroll_center_faded(component) {
  "cover the screen with white INSTANTLY (opacity 1 at creation, so the top-scrolled list is never painted), snap the just-left lesson to center while hidden behind the white, then FADE the white OUT to reveal the already-centered list. Only the reveal fades - the white must appear at once, not fade in, because fading it in would let the top-scrolled list show through the half-transparent white first (which looked like 'scrolled up, then white, then scrolled properly')";
  let cover = html_body_div();
  html_style_assign(cover, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "white",
    "z-index": "1000",
    opacity: "1",
    transition: "opacity 0.28s ease",
    "pointer-events": "none",
  });
  function frame() {
    "one animation frame, so the fully-white state is committed before we start fading it out - otherwise the browser may coalesce and skip the transition (which read as 'no fade')";
    let r = new Promise(function lambda(resolve) {
      requestAnimationFrame(resolve);
    });
    return r;
  }
  function wait(ms) {
    let r2 = new Promise(function lambda(resolve) {
      setTimeout(resolve, ms);
    });
    return r2;
  }
  await html_scroll_center_now(component);
  await frame();
  html_style_set(cover, "opacity", "0");
  await wait(280);
  html_remove(cover);
}
