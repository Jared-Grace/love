import { property_get } from "./property_get.mjs";
export function g_time_components(time) {
  "the base sky-tint color components {r,g,b,a} for a time of day — the palette (warm-yellow dawn → near-clear neutral noon → golden afternoon → blue-purple night, dawn kept softer/paler than the deep-golden afternoon), as numbers so a continuous phase can linearly interpolate between two of them (g_phase_color)";
  let bases = {
    morning: { r: 255, g: 205, b: 135, a: 0.13 },
    noon: { r: 255, g: 250, b: 235, a: 0.03 },
    afternoon: { r: 255, g: 160, b: 60, a: 0.2 },
    night: { r: 48, g: 34, b: 90, a: 0.5 },
  };
  let base = property_get(bases, time);
  return base;
}
