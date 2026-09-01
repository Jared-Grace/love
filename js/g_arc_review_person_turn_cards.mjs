import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_turns_numbered } from "./g_arc_turns_numbered.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
import { g_arc_review_turn_card } from "./g_arc_review_turn_card.mjs";
import { list_add } from "./list_add.mjs";
export function g_arc_review_person_turn_cards(
  arc,
  by_turn,
  held_by_turn,
  passages,
  notes,
  index,
) {
  "THE TWO MAPS ARE WALKED THE SAME WAY AND NEITHER IS DERIVED FROM THE OTHER. What moved and what was asked about and kept are complements over the lines that were asked about, and not over the arc - most lines are in neither, because nobody wrote a note against them. A turn missing from one says nothing about the other, so each is looked up on its own and each answers with an empty record when it holds nothing for this turn.";
  arguments_assert(arguments, 6);
  let numbered = g_arc_turns_numbered(arc);
  let turns = [];
  for (let one of numbered) {
    let number = property_get(one, "number");
    let key = String(number);
    let turn_moved = property_or_null(by_turn, key);
    let still = equal(turn_moved, null);
    if (still) {
      turn_moved = {};
    }
    let turn_held = property_or_null(held_by_turn, key);
    let none_kept = equal(turn_held, null);
    if (none_kept) {
      turn_held = {};
    }
    let card = g_arc_review_turn_card(
      one,
      passages,
      notes,
      index,
      turn_moved,
      turn_held,
    );
    list_add(turns, card);
  }
  return turns;
}
