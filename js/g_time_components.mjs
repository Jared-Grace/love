import { property_get } from "./property_get.mjs";
import { g_time_override_map } from "./g_time_override_map.mjs";
import { property_exists } from "./property_exists.mjs";
export function g_time_components(time) {
  "the base sky components for a time of day, as numbers so a continuous phase can interpolate between two of them (g_phase_components). THREE knobs, all of which keep the map's lights and darks: {r,g,b,a} = the tint COLOUR, blended soft-light so it only grades hue; `saturate` = how much to keep vs mute the map's OWN colour (night 0.3 — low so the blue tint dominates, but NOT 0, so water stays bluer than land and the two read apart; noon >1 so midday colour POPS under the overhead sun); `darkness` = 0 by day, 1 at night, driving an SVG TONE CURVE (g_phase_curve / g_night_curve) that is the real darkener. PRINCIPLE: a LIGHT is full white at every time of day — the white point stays at 1, only the AMBIENT darkens. brightness dims the lights too; contrast crushes every dark tone to the SAME black; only a tone CURVE can darken the mids, keep the darks DISTINGUISHABLE, and bloom the lights to white at once. so day is `darkness:0` = identity curve = FULL RANGE, colour tint only. the times ring by hue AND intensity, which PEAKS at NOON (sun overhead = brightest, whitest, most saturated): soft warm GOLD morning (gentle, warming — deliberately LESS intense than noon) → bright cool-WHITE noon (the PEAK: lightest + most vivid, saturate>1 so colour pops) → deep ORANGE-RED afternoon (warm, slightly darker mids) → deep ROSE-MAGENTA sunset (off the afternoon→night chord, the colour a straight lerp would skip; dimmed so it reads as evening, not a pink afternoon) → deep BLUE night (dark, but saturate 0.3 keeps WATER bluer than LAND so they read apart) → cool LAVENDER sunrise (periwinkle first-light, cooler + paler than the warm sunset, bridging night-blue toward morning-gold)";
  let bases = {
    morning: { r: 255, g: 205, b: 150, a: 0.55, saturate: 0.9, darkness: 0 },
    noon: { r: 238, g: 244, b: 255, a: 0.5, saturate: 1.2, darkness: 0 },
    afternoon: { r: 255, g: 120, b: 30, a: 0.55, saturate: 1, darkness: 0.2 },
    sunset: { r: 250, g: 60, b: 140, a: 0.7, saturate: 0.5, darkness: 0.52 },
    night: { r: 68, g: 84, b: 140, a: 0.9, saturate: 0.3, darkness: 1 },
    sunrise: { r: 255, g: 160, b: 85, a: 0.62, saturate: 0.5, darkness: 0.32 },
  };
  let overrides = g_time_override_map();
  if (property_exists(overrides, time)) {
    let override = property_get(overrides, time);
    return override;
  }
  let base = property_get(bases, time);
  return base;
}
