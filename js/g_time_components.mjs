import { property_get } from "./property_get.mjs";
export function g_time_components(time) {
  "the base sky components for a time of day, as numbers so a continuous phase can interpolate between two of them (g_phase_components). THREE knobs, all of which keep the map's lights and darks: {r,g,b,a} = the tint COLOUR, blended soft-light so it only grades hue; `saturate` = how much to mute the map's own colour (night 0.25 so the blue tint dominates and grass reads BLUE not teal); `darkness` = 0 by day, 1 at night, driving an SVG TONE CURVE (g_phase_curve / g_night_curve) that is the real darkener. PRINCIPLE: a LIGHT is full white at every time of day — the white point stays at 1, only the AMBIENT darkens. brightness dims the lights too; contrast crushes every dark tone to the SAME black; only a tone CURVE can darken the mids, keep the darks DISTINGUISHABLE, and bloom the lights to white at once. so day is `darkness:0` = identity curve = FULL RANGE, colour tint only. the times are distinct in hue, a smooth ring: RICH warm GOLD morning (stronger + more saturated than noon so they don't blur) → COOL pale BLUE-WHITE noon (neutral) → deep ORANGE-RED afternoon (slightly darker mids) → deep ROSE-MAGENTA sunset (off the afternoon→night chord, the colour a straight lerp would skip; dimmed so it reads as evening, not a pink afternoon) → hazy BLUE night (lifted so dark characters stay visible) → soft PALE-PINK sunrise (cooler + paler than sunset, dawn climbing out of night back to morning)";
  let bases = {
    morning: { r: 255, g: 198, b: 120, a: 0.52, saturate: 1.12, darkness: 0 },
    noon: { r: 200, g: 222, b: 255, a: 0.42, saturate: 1, darkness: 0 },
    afternoon: { r: 255, g: 120, b: 30, a: 0.55, saturate: 1, darkness: 0.2 },
    sunset: { r: 250, g: 60, b: 140, a: 0.7, saturate: 0.5, darkness: 0.52 },
    night: { r: 10, g: 50, b: 250, a: 0.95, saturate: 0.1, darkness: 1 },
    sunrise: { r: 255, g: 145, b: 165, a: 0.58, saturate: 0.7, darkness: 0.5 },
  };
  let base = property_get(bases, time);
  return base;
}
