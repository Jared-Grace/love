import { g_time_components } from "./g_time_components.mjs";
import { g_times } from "./g_times.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { floor } from "./floor.mjs";
import { mod } from "./mod.mjs";
import { add_1 } from "./add_1.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_phase_color(phase, seed) {
  "the vertical-gradient sky tint for a CONTINUOUS day phase (0=morning … 3=night, wrapping) with a warmth jitter from seed — linearly interpolates the two bracketing states' colors by the fractional phase (this IS the smooth drift), applies warmth (seed above 50 warms: more red, less blue), and returns a NEAR-UNIFORM veil (only slightly lighter toward the bottom for a hint of depth) so a time of day reads consistently across the whole top-down map — a strong top-to-horizon fade made night look like day at the screen's bottom edge";
  let times = g_times();
  let n = list_size(times);
  let p = mod(phase, n);
  let base_index = floor(p);
  let next_index = mod(add_1(base_index), n);
  let frac = subtract(p, base_index);
  let ca = g_time_components(list_get(times, base_index));
  let cb = g_time_components(list_get(times, next_index));
  function lerp(key) {
    let va = property_get(ca, key);
    let vb = property_get(cb, key);
    let mixed = add(va, multiply(subtract(vb, va), frac));
    return mixed;
  }
  let warmth = multiply(subtract(seed, 50), 0.35);
  let r = add(lerp("r"), warmth);
  let g = lerp("g");
  let b = subtract(lerp("b"), warmth);
  let a = lerp("a");
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
