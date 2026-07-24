import { g_phase_components } from "./g_phase_components.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_phase_backdrop(phase) {
  "the CSS backdrop-filter for a continuous day phase — the DARKNESS knob, applied to what shows THROUGH the sky veil so the map keeps its own lights and darks. `brightness` scales luminance, `contrast` expands around the midpoint (keeps night's whites BRIGHT while shadows sink — brightness alone dims whites just as much), and `saturate` < 1 MUTES the map's own colours so the blue tint reads as a cooler, bluer night";
  let c = g_phase_components(phase);
  let light = property_get(c, "light");
  let contrast = property_get(c, "contrast");
  let saturate = property_get(c, "saturate");
  let filter = text_combine_multiple([
    "brightness(",
    light,
    ") contrast(",
    contrast,
    ") saturate(",
    saturate,
    ")",
  ]);
  return filter;
}
