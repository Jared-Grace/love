import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
import { g_profile_target_shares } from "./g_profile_target_shares.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { property_set } from "./property_set.mjs";
import { list_copy } from "./list_copy.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { g_profiles_deal_weights } from "./g_profiles_deal_weights.mjs";
import { list_weighted_pick_index } from "./list_weighted_pick_index.mjs";
import { list_add } from "./list_add.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export function g_profiles_dealt(deck, count, next) {
  ("The people a run actually writes, dealt off a deck without replacement and weighted so the spread of the cast lands on ",
    fn_name("g_profile_target_shares"),
    ".");
  ("DEALT rather than rolled field by field. Rolling gender, then age, then marriage separately would build people the deck refuses to hold - a betrothed elderly Roman official who was also a child - because the sieve that made the deck already threw those pairings out. Taking whole cards keeps every person one that could have lived.");
  ("WITHOUT REPLACEMENT, so nobody is written twice. Two people with the same seven answers would be the same person met under two names, which is the thing this exists to stop.");
  ("OWED is the running account of who the cast is still short of: how many people each value is due at the start, counted down by one as each card leaves. Handing that to ",
    fn_name("g_profiles_deal_weights"),
    " before every single draw is what makes the spread come out right, and the note there says why a single fitting up front does not.");
  ("The caller brings the deck, so the same dealer serves the whole cast and the elder's shorter deck without needing to know which it was handed.");
  let short = greater_than(count, deck.length);
  let room = not(short);
  assert_json(room, {
    count,
    deck: deck.length,
    hint: "a deal takes each person at most once, so the deck has to hold at least as many people as the cast wants",
  });
  let shares = g_profile_target_shares();
  let names = object_property_names(shares);
  let owed = {};
  for (let name of names) {
    let table = property_get(shares, name);
    let values = object_property_names(table);
    let axis_owed = {};
    for (let value of values) {
      let share = property_get(table, value);
      let fraction = divide(share, 100);
      let people = multiply(fraction, count);
      property_set(axis_owed, value, people);
    }
    property_set(owed, name, axis_owed);
  }
  let remaining = list_copy(deck);
  let dealt = [];
  for (let index = 0; less_than(index, count); index++) {
    let left = subtract(count, index);
    let weights = g_profiles_deal_weights(remaining, owed, left);
    let picked = list_weighted_pick_index(weights, next);
    let profile = remaining[picked];
    list_add(dealt, profile);
    list_remove_at(remaining, picked);
    for (let name of names) {
      let axis_owed = property_get(owed, name);
      let held = property_get(profile, name);
      let still = property_get(axis_owed, held);
      let spent = subtract(still, 1);
      property_set(axis_owed, held, spent);
    }
  }
  return dealt;
}
