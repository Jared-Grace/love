import { g_arc_turns } from "./g_arc_turns.mjs";
import { g_turns_passages_tally } from "./g_turns_passages_tally.mjs";
export function g_arc_passages_tally(arc, passages) {
  "How many turns of one written arc answered out of each passage it was offered.";
  "THE COUNTING IS ONE NAME DOWN, over turns rather than over an arc, because the same count is wanted of a whole chapter's arcs together and neither shape is a special case of the other. All this adds is which turns: the ones in this arc.";
  let turns = g_arc_turns(arc);
  let r = g_turns_passages_tally(turns, passages);
  return r;
}
