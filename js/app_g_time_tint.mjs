import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_z } from "./g_z.mjs";
import { g_time_color } from "./g_time_color.mjs";
import { g_time_of_day_get } from "./g_time_of_day_get.mjs";
import { g_sky_seed_get } from "./g_sky_seed_get.mjs";
export function app_g_time_tint(container, g) {
  "render the sky-tint veil for the current time of day: a fixed full-screen semi-transparent color over the world (below overlays, pointer-events none). deepens morning→noon→afternoon→night as the player ministers (each unbeliever conversation part advances it), with a per-day warmth jitter (sky_seed)";
  let time = g_time_of_day_get(g);
  let seed = g_sky_seed_get(g);
  let div = html_div(container);
  html_style_assign(div, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: g_time_color(time, seed),
    "pointer-events": "none",
    "z-index": g_z("tint"),
  });
  return div;
}
