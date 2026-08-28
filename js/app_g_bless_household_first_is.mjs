import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_dev_shown_is } from "./app_shared_dev_shown_is.mjs";
import { not } from "./not.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { bless_hash_household_first } from "./bless_hash_household_first.mjs";
import { equal } from "./equal.mjs";
export function app_g_bless_household_first_is() {
  arguments_assert(arguments, 0);
  ("Whether this visit asked for a world that opens with the first household two thirds");
  ("prayed for.");
  ("Held back unless the dev tools are on offer at all, which the ordinary reading of an");
  ("address is not. The other openings only take something away that the player could have");
  ("done themselves; this one WRITES into the record, and a record that begins with prayers");
  ("nobody said is a lie about the player's own work. Behind the same gate as every other");
  ("dev screen, it cannot reach anybody who came to play.");
  let shown = app_shared_dev_shown_is();
  if (not(shown)) {
    return false;
  }
  let name = html_hash_name_get();
  let word = bless_hash_household_first();
  let asked = equal(name, word);
  return asked;
}
