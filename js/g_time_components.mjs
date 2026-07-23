import { property_get } from "./property_get.mjs";
export function g_time_components(time) {
  "the base sky-tint color components {r,g,b,a} for a time of day — the palette, as numbers so a continuous phase can linearly interpolate between two of them (g_phase_color). the four are deliberately DISTINCT in both hue and alpha so drift reads clearly: GOLDEN-YELLOW dawn (visible) → FAINT COOL clear noon (least tint, the bright break) → deep ORANGE-RED afternoon (saturated) → vivid DEEP-BLUE dark night. tuned for contrast: morning yellower/less-red, afternoon & night more saturated, night bluer + darker";
  let bases = {
    morning: { r: 255, g: 220, b: 110, a: 0.3 },
    noon: { r: 215, g: 235, b: 255, a: 0.05 },
    afternoon: { r: 255, g: 110, b: 25, a: 0.44 },
    night: { r: 8, g: 25, b: 105, a: 0.86 },
  };
  let base = property_get(bases, time);
  return base;
}
