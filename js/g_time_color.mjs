import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_time_color(time, seed) {
  "the semi-transparent sky-tint for a time of day, with a per-day WARMTH jitter from `seed` (0-100, 50 = neutral): above 50 warms (more red, less blue), below 50 cools — so no two mornings/evenings look identical. bases trace a real day arc: warm-yellow dawn → near-clear neutral noon → golden afternoon → blue-purple night (dawn kept softer/paler than the deep-golden afternoon). the jitter is subtle so the map stays readable, and the browser clamps any out-of-range channel. NOTE: this is a color OVERLAY (shifts hue + darkens via alpha); saturation/contrast shaping would need CSS filters on the map (deferred)";
  let bases = {
    morning: { r: 255, g: 205, b: 135, a: 0.13 },
    noon: { r: 255, g: 250, b: 235, a: 0.03 },
    afternoon: { r: 255, g: 160, b: 60, a: 0.2 },
    night: { r: 48, g: 34, b: 90, a: 0.5 },
  };
  let base = property_get(bases, time);
  let warmth = multiply(subtract(seed, 50), 0.35);
  let r = add(property_get(base, "r"), warmth);
  let g = property_get(base, "g");
  let b = subtract(property_get(base, "b"), warmth);
  let a = property_get(base, "a");
  let color = text_combine_multiple(["rgba(", r, ", ", g, ", ", b, ", ", a, ")"]);
  return color;
}
