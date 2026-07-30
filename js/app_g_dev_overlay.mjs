import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
export function app_g_dev_overlay(title_text) {
  "the full-screen panel a dev screen draws itself into: fixed over the whole viewport in the page background colour, scrolling on its own, with a bold title at the top. shared by every #route that shows a PAGE of its own rather than acting on the map, so the directory and the design reader cannot drift apart in look. BESPOKE (style object literal) — do NOT auto-canonicalize";
  let div = html_body_div();
  html_style_assign(div, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: app_shared_color_page_background(),
    color: "black",
    display: "flex",
    "flex-direction": "column",
    "align-items": "stretch",
    "justify-content": "flex-start",
    gap: "0",
    "z-index": "1000",
    padding: "1rem",
    "box-sizing": "border-box",
    "overflow-y": "auto",
  });
  let title = html_p_text(div, title_text);
  html_style_assign(title, {
    margin: "0",
    "font-weight": "bold",
  });
  return div;
}
