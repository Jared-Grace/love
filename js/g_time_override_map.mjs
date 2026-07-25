import { global_function_property_initialize } from "./global_function_property_initialize.mjs";
export function g_time_override_map() {
  "the dev-only palette OVERRIDE map (time-of-day name → components) — lets the #sky compare pills flip a single time such as sunrise between candidate palettes WITHOUT editing the baked cycle. empty in the real game, so the base lookup falls straight through to the baked palettes";
  let map = global_function_property_initialize(g_time_override_map, "map", {});
  return map;
}
