import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function g_arc_lengths_r(r6, chapter, question_turns, npcs_floor_met) {
  arguments_assert(arguments, 4);
  let lines = property_get(r6, "lines");
  let matches = property_get(r6, "matches");
  let arc_turns = property_get(r6, "arc_turns");
  let cap = property_get(r6, "cap");
  let lengths = property_get(r6, "lengths");
  let turns_unspent = property_get(r6, "turns_unspent");
  let npcs = property_get(r6, "npcs");
  let npcs_minimum = property_get(r6, "npcs_minimum");
  let r = {
    chapter,
    lines,
    matches,
    question_turns,
    arc_turns,
    cap,
    lengths,
    turns_unspent,
    npcs,
    npcs_minimum,
    npcs_floor_met,
  };
  return r;
}
