import { property_get } from "./property_get.mjs";
export function g_time_components(time) {
  "the base sky components for a time of day, as numbers so a continuous phase can interpolate between two of them (g_phase_components). TWO knobs, both of which keep the map's lights and darks: {r,g,b,a} = the tint COLOUR, blended soft-light so it only grades hue; `light` + `contrast` = the map's backdrop-filter, which is what actually darkens night. PRINCIPLE: a LIGHT is full white at every time of day — the white point stays at 1, only the AMBIENT (mids + shadows) darkens. So darkness comes from CONTRAST, not from lowering brightness: `contrast` pivots at mid-grey and pushes the bright pixels UP (clamping to full white — a light stays a light) while pushing shadows DOWN. `brightness` (`light`) stays at 1 all day (never caps the whites) and only dips slightly at night (.95, with contrast 1.65 the whites still bloom to full 1.0). daytimes are contrast 1 = FULL RANGE, colour tint only. night `saturate` < 1 MUTES the map's green/tan so the blue tint reads as a bluer night. the four times are deliberately distinct in hue (and near-full brightness by day so highlights read): soft warm PALE-GOLD dawn (natural, not a heavy amber/sepia — that read unnatural) → COOL BLUE-WHITE noon (brightest, neutral) → bright deep ORANGE-RED afternoon (lights kept light) → cool BLUE night. morning stays warm vs noon's cool, so they don't blur together";
  let bases = {
    morning: { r: 255, g: 223, b: 168, a: 0.42, light: 1, contrast: 1, saturate: 1.05 },
    noon: { r: 200, g: 222, b: 255, a: 0.42, light: 1, contrast: 1, saturate: 1 },
    afternoon: { r: 255, g: 120, b: 30, a: 0.55, light: 1, contrast: 1, saturate: 1 },
    night: { r: 10, g: 50, b: 250, a: 0.95, light: 0.95, contrast: 1.65, saturate: 0.4 },
  };
  let base = property_get(bases, time);
  return base;
}
