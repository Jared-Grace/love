import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_lengths_arc_turns } from "./g_arc_lengths_arc_turns.mjs";
import { property_get } from "./property_get.mjs";
export async function g_arc_lengths_question_turns(chapter, settings) {
  arguments_assert(arguments, 2);
  let r2 = await g_arc_lengths_arc_turns(chapter, settings);
  let arc_turns = property_get(r2, "arc_turns");
  let cap = property_get(r2, "cap");
  let lengths = property_get(r2, "lengths");
  let turns_unspent = property_get(r2, "turns_unspent");
  let npcs = property_get(r2, "npcs");
  let r5 = property_get(r2, "r5");
  let question_turns = property_get(r5, "question_turns");
  let r = {
    arc_turns,
    cap,
    lengths,
    turns_unspent,
    npcs,
    r5,
    question_turns,
  };
  return r;
}
