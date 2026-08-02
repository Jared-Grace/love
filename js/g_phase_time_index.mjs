import { g_times } from "./g_times.mjs";
import { list_size } from "./list_size.mjs";
import { mod } from "./mod.mjs";
import { round } from "./round.mjs";
export function g_phase_time_index(phase) {
  ("which time-of-day keyframe a CONTINUOUS sky phase is nearest, as an index into ",
    g_times.name,
    " — the phase is unbounded (walking grows it, a drift lands between anchors) so wrap it into the ring and round to the closest anchor (5.6 becomes 6 which wraps to 0 = morning). the pure half of the current-time reader, so a caller holding a phase it worked out itself (a conversation's slice start) can name its time without a game save. deliberately does NOT spell that reader's name: it imports THIS, so a live back-reference would form an import cycle whose binding reads undefined at call time");
  let list = g_times();
  let n = list_size(list);
  let wrapped = mod(phase, n);
  let nearest = round(wrapped);
  let index = mod(nearest, n);
  return index;
}
