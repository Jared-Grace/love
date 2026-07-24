import { property_get } from "./property_get.mjs";
export function g_time_components(time) {
  "the base sky components for a time of day, as numbers so a continuous phase can interpolate between two of them (g_phase_components). TWO knobs, both of which keep the map's lights and darks: {r,g,b,a} = the tint COLOUR, blended soft-light so it only grades hue; `light` + `contrast` = the map's backdrop-filter, which is what actually darkens night. night is dark + cool: MODERATE brightness so shadows aren't crushed (contrast 2.0 crushed them — user said 'too dark'), enough contrast to keep whites bright, and `saturate` < 1 to MUTE the map's own green/tan so the blue tint reads as a bluer night (the soft-light blue alone can't override strong greens). the four times are deliberately distinct: GOLDEN-YELLOW dawn → COOL BLUE-WHITE noon (brightest) → deep ORANGE-RED afternoon → cool BLUE night";
  let bases = {
    morning: { r: 255, g: 205, b: 110, a: 0.5, light: 0.92, contrast: 1, saturate: 1 },
    noon: { r: 195, g: 225, b: 255, a: 0.35, light: 1, contrast: 1, saturate: 1 },
    afternoon: { r: 255, g: 120, b: 30, a: 0.55, light: 0.9, contrast: 1, saturate: 1 },
    night: { r: 25, g: 65, b: 220, a: 0.9, light: 0.62, contrast: 1.5, saturate: 0.55 },
  };
  let base = property_get(bases, time);
  return base;
}
