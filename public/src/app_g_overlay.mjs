import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { g_z } from "../../../love/public/src/g_z.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_g_overlay(div_map) {
  let container = object_property_get(div_map, "container");
  const z_index = g_z("overlay");
  let overlay = html_div(container);
  let s = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
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
