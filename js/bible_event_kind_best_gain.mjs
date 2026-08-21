import { arguments_assert } from "./arguments_assert.mjs";
import { bible_event_kind_gain } from "./bible_event_kind_gain.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { greater_than } from "./greater_than.mjs";
import { each } from "./each.mjs";
export function bible_event_kind_best_gain(ranked, uncovered, chosen_names) {
  "$plain ranked";
  "$plain uncovered";
  "$plain chosen_names";
  "Of the kinds not chosen yet, the one reaching the most readings that nothing chosen reaches already - given as the ranked row it came from together with what it buys.";
  arguments_assert(arguments, 3);
  ("A TIE GOES TO THE COMMONER KIND, and that is what makes the answer the same every time it is asked. The ranking is walked in frequency order and only a STRICTLY larger gain replaces the leader, so of two kinds buying the same amount the one met first wins - and the one met first is the commoner one.");
  ("The row is handed back rather than just the kind, because the caller wants the count that came with it and re-deriving that would walk the corpus again for a number already in hand.");
  let best = null;
  let best_gain = 0;
  function each_ranked(row) {
    let kind = property_get(row, "value");
    let already = list_includes(chosen_names, kind);
    if (already) {
      return;
    }
    let gain = bible_event_kind_gain(uncovered, kind);
    let better = greater_than(gain, best_gain);
    if (better) {
      best = row;
      best_gain = gain;
    }
  }
  each(ranked, each_ranked);
  let found = {
    best,
    best_gain,
  };
  return found;
}
