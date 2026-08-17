import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function g_arc_lengths_npcs_floor_met(r4) {
  arguments_assert(arguments, 1);
  let npcs_minimum = property_get(r4, "npcs_minimum");
  let npcs = property_get(r4, "npcs");
  let turns_unspent = property_get(r4, "turns_unspent");
  let lengths = property_get(r4, "lengths");
  let cap = property_get(r4, "cap");
  let arc_turns = property_get(r4, "arc_turns");
  let matches = property_get(r4, "matches");
  let lines = property_get(r4, "lines");
  let npcs_floor_met = greater_than_equal(npcs, npcs_minimum);
  let r = {
    npcs_minimum,
    npcs,
    turns_unspent,
    lengths,
    cap,
    arc_turns,
    matches,
    lines,
    npcs_floor_met,
  };
  return r;
}
