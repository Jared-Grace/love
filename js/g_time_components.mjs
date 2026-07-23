import { property_get } from "./property_get.mjs";
export function g_time_components(time) {
  "the base sky components for a time of day, as numbers so a continuous phase can interpolate between two of them (g_phase_components). TWO knobs, both of which keep the map's lights and darks: {r,g,b,a} = the tint COLOUR, blended soft-light so it only grades hue; `light` = the map BRIGHTNESS multiplier (backdrop-filter), which is what actually darkens night. the four times are deliberately distinct: GOLDEN-YELLOW dawn → COOL BLUE-WHITE noon (brightest) → deep ORANGE-RED afternoon → BLUE night at 0.4 brightness";
  let bases = {
    morning: { r: 255, g: 205, b: 110, a: 0.5, light: 0.92 },
    noon: { r: 195, g: 225, b: 255, a: 0.35, light: 1 },
    afternoon: { r: 255, g: 120, b: 30, a: 0.55, light: 0.9 },
    night: { r: 20, g: 45, b: 150, a: 0.8, light: 0.4 },
  };
  let base = property_get(bases, time);
  return base;
}
