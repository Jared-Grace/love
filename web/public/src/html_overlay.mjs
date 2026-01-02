import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function html_overlay(container, z_index) {
  let overlay = html_div(container);
  let s = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "1vw",
    background: "rgba(0,0,0,0.4)",
    "z-index": z_index,
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  };
  html_style_assign(overlay, s);
  return overlay;
}
