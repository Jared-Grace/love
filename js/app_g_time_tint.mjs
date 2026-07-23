import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_z } from "./g_z.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
export function app_g_time_tint(container, g) {
  "render the sky-tint veil — a fixed full-screen vertical-gradient over the world (below overlays, pointer-events none) — and register it with the sky animator (app_g_sky_set). its color reflects the current time of day; app_g_sky_to then steps it from morning toward evening as the player completes each conversation part";
  let div = html_div(container);
  html_style_assign(div, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    "pointer-events": "none",
    "mix-blend-mode": "soft-light",
    "z-index": g_z("tint"),
  });
  app_g_sky_set(div, g);
  return div;
}
