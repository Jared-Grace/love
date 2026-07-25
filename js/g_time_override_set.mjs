import { g_time_override_map } from "./g_time_override_map.mjs";
import { property_set } from "./property_set.mjs";
export function g_time_override_set(time, components) {
  "set a dev-only palette override for a time of day (stored in the override map) — the #sky compare pills call this to preview a candidate palette through the REAL paint pipeline (tone curve, saturation, seed), not a faked DOM tint";
  let map = g_time_override_map();
  property_set(map, time, components);
}
