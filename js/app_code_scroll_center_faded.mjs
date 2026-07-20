import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_scroll_center_now } from "./html_scroll_center_now.mjs";
export async function app_code_scroll_center_faded(component) {
  "smoothly cover the screen, snap the just-left lesson to center while hidden, then reveal - a white overlay FADES IN (from transparent, so no flash), then once fully white the component is instantly centered underneath, then the overlay FADES OUT to reveal the already-centered list. This is the fade the old cover was meant to do but never did (it jumped to full white instantly, reading as a flash rather than a fade)";
  let body = html_document_body();
  let cover = html_div(body);
  html_style_assign(cover, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "white",
    "z-index": "1000",
    opacity: "0",
    transition: "opacity 0.15s ease",
    "pointer-events": "none",
  });
  function two_frames() {
    "let the opacity:0 start actually paint before we change it, so the transition animates instead of jumping";
    return new Promise(function lambda(resolve) {
      requestAnimationFrame(function lambda2() {
        requestAnimationFrame(resolve);
      });
    });
  }
  function wait(ms) {
    return new Promise(function lambda(resolve) {
      setTimeout(resolve, ms);
    });
  }
  await two_frames();
  html_style_set(cover, "opacity", "1");
  await wait(150);
  await html_scroll_center_now(component);
  html_style_set(cover, "opacity", "0");
  await wait(150);
  html_remove(cover);
}
