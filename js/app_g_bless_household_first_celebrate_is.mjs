import { arguments_assert } from "./arguments_assert.mjs";
import { bless_hash_household_first_celebrate } from "./bless_hash_household_first_celebrate.mjs";
import { app_g_bless_dev_opening_is } from "./app_g_bless_dev_opening_is.mjs";
export function app_g_bless_household_first_celebrate_is() {
  arguments_assert(arguments, 0);
  ("Whether this visit asked for the first household to be finished off by the game itself,");
  ("with the celebration playing on its own the moment the street appears.");
  ("This is the only one of the three words about that household that says a prayer. Its");
  ("neighbours write into the record and stop there - one of them two thirds of the way, the");
  ("other the whole way with the celebration already over - and neither of them has anything");
  ("to play.");
  let word = bless_hash_household_first_celebrate();
  let words = [word];
  let asked = app_g_bless_dev_opening_is(words);
  return asked;
}
