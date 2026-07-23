import { g_phase_components } from "./g_phase_components.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_phase_backdrop(phase) {
  "the CSS backdrop-filter for a continuous day phase — the DARKNESS knob, applied to what shows THROUGH the sky veil so the map keeps its own lights and darks. `brightness` scales luminance, then `contrast` expands around the midpoint: that pairing is what lets night's whites and highlights stay BRIGHT while its mid-tones and shadows sink. brightness alone cannot — it dims the whites by exactly the same factor as everything else";
  let c = g_phase_components(phase);
  let light = property_get(c, "light");
  let contrast = property_get(c, "contrast");
  let filter = text_combine_multiple([
    "brightness(",
    light,
    ") contrast(",
    contrast,
    ")",
  ]);
  return filter;
}
