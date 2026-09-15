import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_z } from "./g_z.mjs";
export function app_g_hero_fx_layer(container_map) {
  arguments_assert(arguments, 1);
  ("A clear sheet over the whole screen that the fire is drawn on. It lies over the street rather than in it, because a fireball crosses the screen and not the squares, and it never takes a tap.");
  let layer = html_div(container_map);
  html_style_assign(layer, {
    position: "absolute",
    inset: "0",
    overflow: "hidden",
    "pointer-events": "none",
    "z-index": g_z("raised"),
  });
  return layer;
}
