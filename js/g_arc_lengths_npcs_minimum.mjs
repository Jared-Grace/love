import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { math_max } from "./math_max.mjs";
export function g_arc_lengths_npcs_minimum(r3, settings) {
  arguments_assert(arguments, 2);
  let v = property_get(r3, "v");
  let lines = property_get(r3, "lines");
  let matches = property_get(r3, "matches");
  let arc_turns = property_get(r3, "arc_turns");
  let cap = property_get(r3, "cap");
  let lengths = property_get(r3, "lengths");
  let turns_unspent = property_get(r3, "turns_unspent");
  let npcs = property_get(r3, "npcs");
  let npcs_minimum = math_max(v, settings.npcs_available_minimum);
  let r = {
    lines,
    matches,
    arc_turns,
    cap,
    lengths,
    turns_unspent,
    npcs,
    npcs_minimum,
  };
  return r;
}
