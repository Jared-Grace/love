import { g_phase_components } from "./g_phase_components.mjs";
import { g_sky_tone_id } from "./g_sky_tone_id.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_phase_backdrop(phase) {
  "the CSS backdrop-filter for a continuous day phase, applied to what shows THROUGH the sky veil: an SVG TONE CURVE (url ref — the DARKNESS knob, whose table g_sky_tone_write rewrites per phase) plus `saturate` < 1 to MUTE the map's own colour so the night tint reads blue. the curve replaced brightness+contrast, which could not darken the mids AND keep the darks distinguishable AND bloom the lights to full white all at once";
  let c = g_phase_components(phase);
  let saturate = property_get(c, "saturate");
  let filter = text_combine_multiple([
    "url(#",
    g_sky_tone_id(),
    ") saturate(",
    saturate,
    ")",
  ]);
  return filter;
}
