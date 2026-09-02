import { bless_hash_household_first_celebrate } from "./bless_hash_household_first_celebrate.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bless_hash_household_first } from "./bless_hash_household_first.mjs";
import { app_g_bless_dev_opening_is } from "./app_g_bless_dev_opening_is.mjs";
export function app_g_bless_family_first_is() {
  arguments_assert(arguments, 0);
  ("Whether this visit asked for a world that opens with the first household two thirds");
  ("prayed for.");
  ("True for the two words that leave that last prayer still to happen, because they want");
  ("the same world. One of them hands it over for the player to say and the other says it");
  ("for them, and that difference is a separate question asked later - what they agree about");
  ("is which two prayers are already down in the record.");
  ("It is NOT true for the third word, which hands over a household already finished and");
  ("already celebrated. That one wants a different world rather than the same world treated");
  ("differently: all three prayers down, and the house down as blessed too.");
  ("Held back unless the dev tools are on offer at all, which the ordinary reading of an");
  ("address is not. The other openings only take something away that the player could have");
  ("done themselves; this one WRITES into the record, and a record that begins with prayers");
  ("nobody said is a lie about the player's own work. That gate is where every dev opening");
  ("is asked about, so it is spelled once and not here.");
  let word = bless_hash_household_first();
  let celebrate = bless_hash_household_first_celebrate();
  let words = [word, celebrate];
  let asked = app_g_bless_dev_opening_is(words);
  return asked;
}
