import { arguments_assert } from "./arguments_assert.mjs";
import { bless_hash_household_first_finished } from "./bless_hash_household_first_finished.mjs";
import { app_g_bless_dev_opening_is } from "./app_g_bless_dev_opening_is.mjs";
export function app_g_bless_household_first_finished_is() {
  arguments_assert(arguments, 0);
  ("Whether this visit asked for the first household not only two thirds prayed for but");
  ("finished off, with the celebration playing by itself.");
  ("This is the narrower of the two questions about that household. Its neighbour is true");
  ("for either opening, because both of them need the two prayers written into the record;");
  ("this one is true for one of them, because only one of them says the third prayer.");
  let word = bless_hash_household_first_finished();
  let words = [word];
  let asked = app_g_bless_dev_opening_is(words);
  return asked;
}
