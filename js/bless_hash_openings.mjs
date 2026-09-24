import { arguments_assert } from "./arguments_assert.mjs";
import { bless_hash_street } from "./bless_hash_street.mjs";
import { bless_hash_family_first } from "./bless_hash_family_first.mjs";
import { bless_hash_family_first_celebrate } from "./bless_hash_family_first_celebrate.mjs";
import { bless_hash_family_first_finished } from "./bless_hash_family_first_finished.mjs";
import { bless_hash_building_first } from "./bless_hash_building_first.mjs";
import { bless_hash_building_first_finished } from "./bless_hash_building_first_finished.mjs";
import { bless_hash_map } from "./bless_hash_map.mjs";
export function bless_hash_openings() {
  arguments_assert(arguments, 0);
  ("Every word after the hash mark that hands the player the real game with the world set up a particular way, rather than drawing a screen over the top of it.");
  ("An opening is not a route. A route draws something on top of the map and the map behind it is only scenery; an opening hands the player the real game, set up so that one part of it can be tested without playing through everything before it.");
  ("Everything asked of one of them is asked of all of them, and what they share is that whatever is not under test is got out of the way: the door prayer and every prayer panel after it are said for the player. Somebody who typed a word after a hash mark came to work on the street and will reload forty times, and a prayer said carelessly forty times is worse than a prayer not said here at all.");
  ("There used to be two lists here, the street openings and the map, because the map kept its prayer panels and the street openings did not. Once every opening skipped them the split described nothing, so it is one list.");
  ("Gathered into one list rather than asked one word at a time, because the question asked of them is asked of the whole set. Written as a run of comparisons, adding the next one would mean finding every place the first one is named - and the one that got missed would be an address that silently opened the ordinary way. The directory reads this same list, so a new opening is linked the moment it is listed.");
  let street = bless_hash_street();
  let household_first = bless_hash_family_first();
  let celebrate = bless_hash_family_first_celebrate();
  let finished = bless_hash_family_first_finished();
  let building = bless_hash_building_first();
  let building_finished = bless_hash_building_first_finished();
  let map = bless_hash_map();
  let words = [
    street,
    household_first,
    celebrate,
    finished,
    building,
    building_finished,
    map,
  ];
  return words;
}
