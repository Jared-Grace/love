import { g_phase_components } from "./g_phase_components.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_phase_color(phase, seed) {
  "the sky-tint COLOUR for a continuous day phase, with a warmth jitter from seed (above 50 warms: more red, less blue). blended SOFT-LIGHT over the map, so it GRADES the colours while the map's own lights and darks come through — darkness is a separate knob (g_phase_brightness). near-uniform top to bottom, with only a hint of depth";
  let c = g_phase_components(phase);
  let warmth = multiply(subtract(seed, 50), 0.35);
  let r = add(property_get(c, "r"), warmth);
  let g = property_get(c, "g");
  let b = subtract(property_get(c, "b"), warmth);
  let a = property_get(c, "a");
  let a_horizon = multiply(a, 0.85);
  let top = text_combine_multiple(["rgba(", r, ",", g, ",", b, ",", a, ")"]);
  let horizon = text_combine_multiple([
    "rgba(",
    r,
    ",",
    g,
    ",",
    b,
    ",",
    a_horizon,
    ")",
  ]);
  let gradient = text_combine_multiple([
    "linear-gradient(to bottom, ",
    top,
    ", ",
    horizon,
    ")",
  ]);
  return gradient;
}
