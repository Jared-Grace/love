import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function g_arc_lengths_count(r2) {
  arguments_assert(arguments, 1);
  let next = property_get(r2, "next");
  let lines = property_get(r2, "lines");
  let matches = property_get(r2, "matches");
  let question_turns = property_get(r2, "question_turns");
  let arc_turns = property_get(r2, "arc_turns");
  let cap = property_get(r2, "cap");
  let shortest = property_get(r2, "shortest");
  let lengths = property_get(r2, "lengths");
  let turns_unspent = property_get(r2, "turns_unspent");
  let count = lengths.length;
  return {
    next,
    lines,
    matches,
    question_turns,
    arc_turns,
    cap,
    shortest,
    lengths,
    turns_unspent,
    count,
  };
}
