import { property_get } from "./property_get.mjs";
export function g_time_components(time) {
  "the base sky components for a time of day, as numbers so a continuous phase can interpolate between two of them (g_phase_components). TWO knobs, both of which keep the map's lights and darks: {r,g,b,a} = the tint COLOUR, blended soft-light so it only grades hue; `light` + `contrast` = the map's backdrop-filter, which is what actually darkens night. night pairs a MODERATE brightness with a HIGH contrast on purpose: contrast expands around the midpoint, so the whites and highlights stay BRIGHT (~0.8) while the mid-tones and shadows sink (~0.15) — brightness alone would dim the whites just as much as everything else. the four times are deliberately distinct: GOLDEN-YELLOW dawn → COOL BLUE-WHITE noon (brightest) → deep ORANGE-RED afternoon → BLUE night";
  let bases = {
    morning: { r: 255, g: 205, b: 110, a: 0.5, light: 0.92, contrast: 1 },
    noon: { r: 195, g: 225, b: 255, a: 0.35, light: 1, contrast: 1 },
    afternoon: { r: 255, g: 120, b: 30, a: 0.55, light: 0.9, contrast: 1 },
    night: { r: 20, g: 45, b: 150, a: 0.8, light: 0.65, contrast: 2 },
  };
  let base = property_get(bases, time);
  return base;
}
