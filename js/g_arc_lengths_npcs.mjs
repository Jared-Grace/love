import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { identity } from "./identity.mjs";
export function g_arc_lengths_npcs(r4) {
  arguments_assert(arguments, 1);
  let lines = property_get(r4, "lines");
  let matches = property_get(r4, "matches");
  let question_turns = property_get(r4, "question_turns");
  let arc_turns = property_get(r4, "arc_turns");
  let cap = property_get(r4, "cap");
  let lengths = property_get(r4, "lengths");
  let turns_unspent = property_get(r4, "turns_unspent");
  list_sort_number_mapper_reverse(lengths, identity);
  let npcs = lengths.length;
  let r = {
    lines,
    matches,
    question_turns,
    arc_turns,
    cap,
    lengths,
    turns_unspent,
    npcs,
  };
  return r;
}
