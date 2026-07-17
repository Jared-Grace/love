import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_scroll_center_now } from "./html_scroll_center_now.mjs";
export async function app_code_scroll_center_covered(component) {
  "cover the whole screen with a white overlay, then center the component (which happens a couple of frames later, after the shared refresh scrolls the window to the top), then fade the overlay out - so the brief top-to-center jump is hidden behind white instead of flashing";
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
    opacity: "1",
    transition: "opacity 0.15s ease",
    "pointer-events": "none",
  });
  await html_scroll_center_now(component);
  html_style_set(cover, "opacity", "0");
  function remove() {
    html_remove(cover);
  }
  setTimeout(remove, 150);
}
