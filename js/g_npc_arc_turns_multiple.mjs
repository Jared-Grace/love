import { less_than } from "./less_than.mjs";
import { g_npc_arc_turns } from "./g_npc_arc_turns.mjs";
import { list_add } from "./list_add.mjs";
export function g_npc_arc_turns_multiple(next, arcs_count) {
  "How long each of a run of arcs is meant to be, drawn one after another.";
  "Split off from assembling a plant so that the plan and the reading are the same arithmetic. What is drawn here is a WANT, and written content will not land on it exactly - an arc that had more to say runs long and one that said it runs short. Everything downstream takes a list of lengths and never asks where the list came from, so measured lengths go through the identical path and the plant adjusts to what was actually written.";
  let turns_all = [];
  for (let step = 0; less_than(step, arcs_count); step++) {
    let turns = g_npc_arc_turns(next);
    list_add(turns_all, turns);
  }
  return turns_all;
}
