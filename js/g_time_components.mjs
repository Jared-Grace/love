import { property_get } from "./property_get.mjs";
export function g_time_components(time) {
  "the base sky components for a time of day, as numbers so a continuous phase can interpolate between two of them (g_phase_components). knobs: {r,g,b,a} = the tint COLOUR, blended soft-light so it only grades hue; `saturate` = how much of the map's OWN colour survives (LOW on the warm and dark times so the tint dominates and the map washes toward it; >1 at noon so true colours POP under the overhead sun); `darkness` = 0 by day, 1 at night, driving an SVG TONE CURVE (g_phase_curve / g_night_curve) that is the real darkener — a LIGHT stays full white at every time (the curve blooms the top to 1), only the AMBIENT darkens. PRINCIPLE = colour temperature: the low sun at the HORIZONS is WARM (light rakes through more atmosphere → red/gold), the high sun at NOON is WHITE/neutral, deep night is near-colourless GRAY (rod vision). so warmth lives at BOTH ends of the day, white at the peak, gray in the dark: warm GOLD sunrise (muted + dim, low sun climbing out of night) → warm GOLD morning (brighter, still washed gold) → bright cool-WHITE noon (the PEAK: vivid true colours, saturate>1) → deep ORANGE-RED afternoon → deep ROSE-MAGENTA sunset (the warm low sun going down) → moonlit GRAY night (saturate low so land greys while water keeps enough blue to read apart). the saturate RAMP is what makes the day VISIBLY move — gold-washed dawn → vivid bright noon → warm dusk → grey night, each step a clear shift, not a subtle tint a bright map would swallow";
  let bases = {
    morning: {
      r: 255,
      g: 195,
      b: 128,
      a: 0.58,
      saturate: 0.78,
      darkness: 0,
    },
    noon: {
      r: 238,
      g: 244,
      b: 255,
      a: 0.5,
      saturate: 1.2,
      darkness: 0,
    },
    afternoon: {
      r: 255,
      g: 120,
      b: 30,
      a: 0.55,
      saturate: 1,
      darkness: 0.2,
    },
    sunset: {
      r: 250,
      g: 60,
      b: 140,
      a: 0.7,
      saturate: 0.5,
      darkness: 0.52,
    },
    night: {
      r: 82,
      g: 92,
      b: 120,
      a: 0.9,
      saturate: 0.2,
      darkness: 1,
    },
    sunrise: {
      r: 255,
      g: 160,
      b: 85,
      a: 0.62,
      saturate: 0.5,
      darkness: 0.32,
    },
  };
  let base = property_get(bases, time);
  return base;
}
