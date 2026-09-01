import { property_in_list } from "./property_in_list.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_lines_addressed } from "./g_arc_lines_addressed.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
export function g_arc_noted_held_by_turn(arc, noted_addresses, moved_by_turn) {
  "Every line the last revision was asked about and left exactly as it was, filed under the turn it is in and then under the field, so a screen drawing a line can say that a note was filed there and the wording was kept.";
  "IT IS THE OTHER HALF OF WHAT MOVED AND HAS TO BE DRAWN BESIDE IT. A reader who files notes and comes back sees the lines that were rewritten; the lines their note did not change look exactly like lines they never wrote a note about. Those are opposite facts - one says the ask was weighed and the wording kept, the other says nothing was ever asked - and the reader cannot tell them apart from the page.";
  "THE ARC'S OWN LINES ARE WALKED AND THE ADDRESSES ARE NOT TAKEN APART, the same as they are for what moved. An address is a number and a field joined by one function that owns that spelling, so recovering the pair by splitting is a second opinion about it, and it goes wrong quietly the day the spelling changes. Every line already carries its number, its field and its address together, so the pair is read rather than recovered.";
  "A LINE THAT MOVED IS LEFT OUT, because it is already spoken for. Marked in both places it would be shown as rewritten and as kept, which is a page contradicting itself about the one thing the reader came to check.";
  "IT IS ONLY EVER RIGHT AGAINST THE VERSION A REVISION REPLACED, and the caller is what has to hold to that. The addresses belong to the wave of notes that one revision answered, so set beside a reading taken afterwards they would say a note was left unanswered when the reader has already seen the outcome, and set beside the oldest backup they would name a wave nobody can place at all.";
  arguments_assert(arguments, 3);
  let by_turn = {};
  let lines = g_arc_lines_addressed(arc);
  for (let line of lines) {
    let asked = property_in_list(line, "address", noted_addresses);
    if (not(asked)) {
      continue;
    }
    let number = property_get(line, "number");
    let field = property_get(line, "field");
    let key = String(number);
    let moved_fields = property_or_null(moved_by_turn, key);
    let some_moved = not_equal(moved_fields, null);
    if (some_moved) {
      let change = property_or_null(moved_fields, field);
      let rewritten = not_equal(change, null);
      if (rewritten) {
        continue;
      }
    }
    let fields = property_or_null(by_turn, key);
    let first = equal(fields, null);
    if (first) {
      fields = {};
      property_set(by_turn, key, fields);
    }
    property_set(fields, field, true);
  }
  return by_turn;
}
