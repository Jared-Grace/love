import { bless_hash_household_first_celebrate } from "./bless_hash_household_first_celebrate.mjs";
import { bless_hash_household_first_finished } from "./bless_hash_household_first_finished.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bless_hash_street } from "./bless_hash_street.mjs";
import { bless_hash_household_first } from "./bless_hash_household_first.mjs";
export function bless_hash_street_openings() {
  arguments_assert(arguments, 0);
  ("Every word after the hash mark that opens the praying game onto the STREET rather than");
  ("drawing a screen over it.");
  ("An opening is not a route. A route draws something on top of the map and the map behind");
  ("it is only scenery; an opening hands the player the real game with the world set up a");
  ("particular way. So they are listed apart from the registry, and everything that is true");
  ("of one opening is true of them all - the door prayer is skipped, and so is the prayer");
  ("panel over each person.");
  ("Gathered into one list rather than asked one word at a time, because the questions asked");
  ("of them are asked of the whole set: any opening skips the door, any opening skips the");
  ("panel. Written as a run of comparisons, adding the next opening would mean finding every");
  ("place the first one is named - and the one that got missed would be an address that");
  ("silently opened the ordinary way.");
  let street = bless_hash_street();
  let household_first = bless_hash_household_first();
  let celebrate = bless_hash_household_first_celebrate();
  let finished = bless_hash_household_first_finished();
  let words = [street, household_first, celebrate, finished];
  return words;
}
