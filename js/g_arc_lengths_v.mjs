import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { divide_ceil } from "./divide_ceil.mjs";
export function g_arc_lengths_v(r2, r5, settings) {
  arguments_assert(arguments, 3);
  let npcs = property_get(r2, "npcs");
  let turns_unspent = property_get(r2, "turns_unspent");
  let lengths = property_get(r2, "lengths");
  let cap = property_get(r2, "cap");
  let arc_turns = property_get(r2, "arc_turns");
  let matches = property_get(r5, "matches");
  let lines = property_get(r5, "lines");
  let v = divide_ceil(settings.day_matches, settings.conversation_turns_mean);
  let r = {
    npcs,
    turns_unspent,
    lengths,
    cap,
    arc_turns,
    matches,
    lines,
    v,
  };
  return r;
}
