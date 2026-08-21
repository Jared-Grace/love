import { property_get } from "./property_get.mjs";
import { g_arc_answer_passage } from "./g_arc_answer_passage.mjs";
import { g_passage_reference } from "./g_passage_reference.mjs";
import { list_add } from "./list_add.mjs";
import { list_tally } from "./list_tally.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function g_turns_passages_tally(turns, passages) {
  "How many of these turns answered out of each passage they were offered.";
  "EVERY OFFERED PASSAGE IS LISTED, including the ones no turn used. A count of what was used answers the easy question; the one somebody is actually asking is which of these words were left on the floor, and a passage that appears in no turn cannot put itself on a list gathered from the turns.";
  "The spelling is settled by fetching the passage rather than by reading the turn, so two turns that wrote the same passage differently count as the same passage - which is the whole point of a tally and would silently split into two entries if the written words were counted instead.";
  "IT COUNTS TURNS AND NOT ARCS, which is what lets one arc and a whole chapter's worth of them be counted by the same words. A reviewer asks it of one person; the prompt that writes the next person asks it of everybody written so far, and neither is a special case of the other at this level.";
  let used = [];
  for (let turn of turns) {
    let reference_written = property_get(turn, "reference");
    let passage = g_arc_answer_passage(passages, reference_written);
    let reference = g_passage_reference(passage);
    list_add(used, reference);
  }
  let counts = list_tally(used);
  let r = [];
  for (let passage of passages) {
    let reference = g_passage_reference(passage);
    let counted = property_or_null(counts, reference);
    let missing = equal(counted, null);
    let turns_used = 0;
    if (not(missing)) {
      turns_used = counted;
    }
    list_add(r, {
      reference,
      turns: turns_used,
    });
  }
  return r;
}
