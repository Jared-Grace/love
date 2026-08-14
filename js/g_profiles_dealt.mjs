import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_map } from "./list_map.mjs";
import { g_profile_weight } from "./g_profile_weight.mjs";
import { less_than } from "./less_than.mjs";
import { list_weighted_pick_index } from "./list_weighted_pick_index.mjs";
import { list_add } from "./list_add.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export function g_profiles_dealt(deck, count, next) {
  ("The people a run actually writes, dealt off a deck without replacement and weighted so the spread lands near ",
    fn_name("g_profile_target_shares"),
    ".");
  ("DEALT rather than rolled per field. Rolling each axis on its own would let the same person be written twice and would give whatever spread chance gave; dealing hands out each card once and leaves the whole run's spread as the one that was chosen.");
  ("WEIGHTED rather than even. The deck is one row per valid combination, so its own shape is an accident of how many values each axis happens to have - a third of it female because no woman held Roman office, which is a true rule with a false consequence. ",
    fn_name("g_profile_target_shares"),
    " writes down what the spread should be and names weighting the draw as the way to reach it without deleting anybody.");
  ("The weights are dealt away alongside the people, so a card taken stops competing. Re-summing what is left on every draw is what makes it a deal rather than a repeated roll, and the cost is small next to writing one arc.");
  ("The caller brings the deck, so the same dealer serves the whole cast and the elder's shorter deck without knowing which it was handed.");
  let b = greater_than(count, deck.length);
  let room = not(b);
  assert_json(room, {
    count,
    deck: deck.length,
    hint: "a deal takes each person at most once, so the deck has to hold at least as many people as the cast wants",
  });
  let remaining = list_copy(deck);
  let weights = list_map(remaining, g_profile_weight);
  let dealt = [];
  for (let index = 0; less_than(index, count); index++) {
    let picked = list_weighted_pick_index(weights, next);
    let profile = remaining[picked];
    list_add(dealt, profile);
    list_remove_at(remaining, picked);
    list_remove_at(weights, picked);
  }
  return dealt;
}
