import { property_get } from "./property_get.mjs";
export function g_time_components(time) {
  "the base sky components for a time of day, as numbers so a continuous phase can interpolate between two of them (g_phase_components). TWO knobs, both of which keep the map's lights and darks: {r,g,b,a} = the tint COLOUR, blended soft-light so it only grades hue; `light` + `contrast` = the map's backdrop-filter, which is what actually darkens night. night is cool + FULL-RANGE: a fairly high brightness (.88) lets the whites/highlights climb to near-WHITE (user wanted the lights whiter, closer to full range), paired with high contrast (1.5) that pushes the mid-tones and shadows back DOWN so it still reads dark (contrast pivots at mid-grey, so it spreads the bright whites and the dark tiles apart — the map's own darks stay visible, not crushed). `saturate` < 1 MUTES the map's green/tan so the blue tint reads as a bluer night. the four times are deliberately distinct in hue (and near-full brightness by day so highlights read): soft warm PALE-GOLD dawn (natural, not a heavy amber/sepia — that read unnatural) → COOL BLUE-WHITE noon (brightest, neutral) → bright deep ORANGE-RED afternoon (lights kept light) → cool BLUE night. morning stays warm vs noon's cool, so they don't blur together";
  let bases = {
    morning: { r: 255, g: 223, b: 168, a: 0.42, light: 0.95, contrast: 1, saturate: 1.05 },
    noon: { r: 200, g: 222, b: 255, a: 0.42, light: 1, contrast: 1, saturate: 1 },
    afternoon: { r: 255, g: 120, b: 30, a: 0.55, light: 0.98, contrast: 1, saturate: 1 },
    night: { r: 10, g: 50, b: 250, a: 0.95, light: 0.88, contrast: 1.5, saturate: 0.4 },
  };
  let base = property_get(bases, time);
  return base;
}
