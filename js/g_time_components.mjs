import { property_get } from "./property_get.mjs";
export function g_time_components(time) {
  "the base sky components for a time of day, as numbers so a continuous phase can interpolate between two of them (g_phase_components). TWO knobs, both of which keep the map's lights and darks: {r,g,b,a} = the tint COLOUR, blended soft-light so it only grades hue; `light` + `contrast` = the map's backdrop-filter, which is what actually darkens night. night is cool + FULL-RANGE: a fairly high brightness (.88) lets the whites/highlights climb to near-WHITE (user wanted the lights whiter, closer to full range), paired with high contrast (1.5) that pushes the mid-tones and shadows back DOWN so it still reads dark (contrast pivots at mid-grey, so it spreads the bright whites and the dark tiles apart — the map's own darks stay visible, not crushed). `saturate` < 1 MUTES the map's green/tan so the blue tint reads as a bluer night. the four times are deliberately distinct in BOTH hue and brightness so no two look alike: warm GOLD dawn (dimmer, light .85) → COOL BLUE-WHITE noon (brightest, light 1) → deep ORANGE-RED afternoon → cool BLUE night. morning vs noon were too similar until morning went warmer+dimmer and noon cooler+full-bright";
  let bases = {
    morning: { r: 255, g: 185, b: 100, a: 0.6, light: 0.85, contrast: 1, saturate: 1 },
    noon: { r: 200, g: 222, b: 255, a: 0.42, light: 1, contrast: 1, saturate: 1 },
    afternoon: { r: 255, g: 120, b: 30, a: 0.55, light: 0.9, contrast: 1, saturate: 1 },
    night: { r: 15, g: 55, b: 240, a: 0.95, light: 0.88, contrast: 1.5, saturate: 0.45 },
  };
  let base = property_get(bases, time);
  return base;
}
