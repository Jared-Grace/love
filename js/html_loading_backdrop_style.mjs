import { html_viewport_width_full } from "./html_viewport_width_full.mjs";
import { html_viewport_height_full } from "./html_viewport_height_full.mjs";
export function html_loading_backdrop_style() {
  "the dim full-screen layer every loading cover sits on, shared by the runtime overlay and the static boot splash so the dark-to-dark handoff cannot drift. it only dims: the spinner and the message each pin themselves to the middle of the viewport, so nothing here decides where they land";
  let r = {
    position: "fixed",
    top: "0",
    left: "0",
    width: html_viewport_width_full(),
    height: html_viewport_height_full(),
    background: "rgba(0, 0, 0, 0.8)",
    "z-index": "1000",
  };
  return r;
}
