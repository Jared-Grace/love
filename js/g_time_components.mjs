import { property_get } from "./property_get.mjs";
export function g_time_components(time) {
  "the base sky-tint color components {r,g,b,a} for a time of day — the palette, as numbers so a continuous phase can linearly interpolate between two of them (g_phase_color). the four are deliberately DISTINCT in both hue and alpha so drift reads clearly: ROSY warm dawn (visible) → FAINT COOL clear noon (least tint, the bright break) → GOLDEN afternoon → DEEP-BLUE dark night. morning was too close to noon (both pale-warm); night is bluer + darker than the old blue-purple";
  let bases = {
    morning: { r: 255, g: 170, b: 150, a: 0.3 },
    noon: { r: 215, g: 235, b: 255, a: 0.05 },
    afternoon: { r: 255, g: 150, b: 55, a: 0.38 },
    night: { r: 8, g: 20, b: 70, a: 0.82 },
  };
  let base = property_get(bases, time);
  return base;
}
