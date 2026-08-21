import { property_get } from "./property_get.mjs";
import { g_arc_turns } from "./g_arc_turns.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
export function g_arc_written_turns_count(written, index) {
  "How many turns the person with this number was written, out of everybody written for one chapter.";
  "THE NUMBER IS THE ADDRESS AND NOT THE POSITION. People are stored in whatever order they were written, and a person written for a chapter is only ever named by the number the pool dealt them - so reading the list at that number would answer with somebody else the moment two people are written out of order, and answer plausibly.";
  "A number nobody was written under is a question about a person who does not exist, and it says so rather than answering nought - nought reads as somebody written with no turns, which is a different and much quieter kind of wrong.";
  let counted = null;
  for (let entry of written) {
    let entry_index = property_get(entry, "index");
    let same = equal(entry_index, index);
    if (same) {
      let arc = property_get(entry, "arc");
      let turns = g_arc_turns(arc);
      counted = list_size(turns);
    }
  }
  let found = not_equal(counted, null);
  assert_json(found, {
    index,
    hint: "no arc is written under this person's number in the arcs handed over - would you like to check which chapter these came from?",
  });
  return counted;
}
