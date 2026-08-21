import { g_arc_turns } from "./g_arc_turns.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { g_turns_passages_tally } from "./g_turns_passages_tally.mjs";
export function g_arcs_passages_tally(arcs, passages) {
  "How many turns across every arc already written answered out of each passage they were offered.";
  "THE ARCS ARE COUNTED TOGETHER AND NOT ONE AT A TIME, because equal usage is a property of the chapter and never of one person. Every arc read on its own can look evenly spread while the chapter leans hard on four passages, and a per-arc count cannot see that - it is the same reading repeated, not the reading anybody wanted.";
  "The number each arc is paired with is not read here. Who a turn belonged to changes nothing about which passage it answered from, and asking for a bare list of arcs is what lets a caller hand over arcs it gathered any way it likes.";
  let turns = [];
  for (let arc of arcs) {
    let list = g_arc_turns(arc);
    list_add_multiple(turns, list);
  }
  let r = g_turns_passages_tally(turns, passages);
  return r;
}
