import { g_phase_time_index } from "./g_phase_time_index.mjs";
import { g_sky_phase_get } from "./g_sky_phase_get.mjs";
import { g_times } from "./g_times.mjs";
export function g_time_current_index(g) {
  ("which time-of-day keyframe the sky is CURRENTLY nearest — the phase (g.sky_phase) is continuous and unbounded (walking grows it, a drift lands between anchors), so wrap it into the ",
    g_times.name,
    " ring and round to the closest anchor (5.6 → 6 → wraps to 0 = morning). drives the #day_parts choice panel's you-are-here highlight");
  let phase = g_sky_phase_get(g);
  let index = g_phase_time_index(phase);
  return index;
}
