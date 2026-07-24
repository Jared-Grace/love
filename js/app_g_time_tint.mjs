import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_z } from "./g_z.mjs";
import { app_g_sky_set } from "./app_g_sky_set.mjs";
export function app_g_time_tint(container, g) {
  "render the sky as TWO full-screen veils so the night darkens the GROUND but not the CHARACTERS (who otherwise vanish — a dark NPC graded to the same blue as a dark tile has no contrast). the GROUND veil sits BELOW the characters (z ground_tint, above only the tiles) and carries the DARKENING backdrop-filter tone curve — so it dims the tiles but nothing above it. the COLOUR veil sits on TOP (z tint, soft-light) and grades EVERYONE the same hue. characters, above the darkener, keep full brightness → they pop against the dark ground, still blue-toned. app_g_sky_set registers the colour veil and links the ground veil on it (color.ground) so app_g_sky_paint can drive both";
  function veil(z) {
    let div = html_div(container);
    html_style_assign(div, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      "pointer-events": "none",
      "z-index": g_z(z),
    });
    return div;
  }
  let ground = veil("ground_tint");
  let color = veil("tint");
  html_style_assign(color, {
    "mix-blend-mode": "soft-light",
  });
  color.ground = ground;
  app_g_sky_set(color, g);
  return color;
}
