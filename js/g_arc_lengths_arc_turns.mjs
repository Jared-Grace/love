import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_lengths_next } from "./g_arc_lengths_next.mjs";
import { g_arc_lengths_count } from "./g_arc_lengths_count.mjs";
import { g_arc_lengths_attempt } from "./g_arc_lengths_attempt.mjs";
import { g_arc_lengths_npcs } from "./g_arc_lengths_npcs.mjs";
import { property_get } from "./property_get.mjs";
export async function g_arc_lengths_arc_turns(chapter, settings) {
  arguments_assert(arguments, 2);
  let r2 = await g_arc_lengths_next(chapter, settings);
  let r3 = g_arc_lengths_count(r2);
  let r4 = g_arc_lengths_attempt(r3, settings);
  let r5 = g_arc_lengths_npcs(r4);
  let npcs = property_get(r5, "npcs");
  let turns_unspent = property_get(r5, "turns_unspent");
  let lengths = property_get(r5, "lengths");
  let cap = property_get(r5, "cap");
  let arc_turns = property_get(r5, "arc_turns");
  let r = {
    r5,
    npcs,
    turns_unspent,
    lengths,
    cap,
    arc_turns,
  };
  return r;
}
