import { g_sky_phase_get } from "./g_sky_phase_get.mjs";
import { g_times } from "./g_times.mjs";
import { list_size } from "./list_size.mjs";
import { mod } from "./mod.mjs";
import { round } from "./round.mjs";
export function g_time_current_index(g) {
  ("which time-of-day keyframe the sky is CURRENTLY nearest — the phase (g.sky_phase) is continuous and unbounded (walking grows it, a drift lands between anchors), so wrap it into the ",
    g_times.name,
    " ring and round to the closest anchor (5.6 → 6 → wraps to 0 = morning). drives the #day_parts choice panel's you-are-here highlight");
  let phase = g_sky_phase_get(g);
  let list = g_times();
  let n = list_size(list);
  let wrapped = mod(phase, n);
  let nearest = round(wrapped);
  let index = mod(nearest, n);
  return index;
}
