import { g_phase_components } from "./g_phase_components.mjs";
import { property_get } from "./property_get.mjs";
export function g_phase_brightness(phase) {
  "the map BRIGHTNESS multiplier for a continuous day phase (1 = full daylight, lower = darker) — applied as a backdrop-filter so night genuinely DARKENS while the map keeps its relative lights and darks. an opaque veil cannot do this: it pulls highlights down AND shadows up toward one colour, flattening both away";
  let c = g_phase_components(phase);
  let light = property_get(c, "light");
  return light;
}
