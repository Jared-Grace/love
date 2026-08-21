import { g_arc_turns } from "./g_arc_turns.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_answer_passage } from "./g_arc_answer_passage.mjs";
import { g_passage_reference } from "./g_passage_reference.mjs";
import { list_add } from "./list_add.mjs";
import { list_tally } from "./list_tally.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function g_arc_passages_tally(arc, passages) {
  "How many turns of a written arc answered out of each passage it was offered.";
  "EVERY OFFERED PASSAGE IS LISTED, including the ones no turn used. A count of what was used answers the easy question; the one a reviewer is actually asking is which of these words the arc left on the floor, and a passage that appears nowhere in the arc cannot put itself on a list gathered from the arc.";
  "The spelling is settled by fetching the passage rather than by reading the turn, so two turns that wrote the same passage differently count as the same passage - which is the whole point of a tally and would silently split into two entries if the written words were counted instead.";
  let turns = g_arc_turns(arc);
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
