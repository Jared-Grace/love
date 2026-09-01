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
  passages,
  notes,
  index,
) {
  arguments_assert(arguments, 5);
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
    let card = g_arc_review_turn_card(one, passages, notes, index, turn_moved);
    list_add(turns, card);
  }
  return turns;
}
