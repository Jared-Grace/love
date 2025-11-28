import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { g_z } from "../../../love/public/src/g_z.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_g_overlay(div) {
  let overlay = html_div(div);
  let s = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    padding: "1vw",
    background: "rgba(0,0,0,0.4)",
    "z-index": g_z("overlay"),
  };
  html_style_assign(overlay, s);
  return overlay;
}
