import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { storage_local_name_get } from "./storage_local_name_get.mjs";
import { app_receipts_zone_countries } from "./app_receipts_zone_countries.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export function app_receipts_zone_get() {
  "The country whose clock this phone reads the list of purchases in, as last chosen here. Nothing chosen yet, or a choice this app no longer offers, is the Philippines, the clock the purchases are kept in.";
  "It is kept on this phone only, because it is how this person likes to read the list, not a fact about the purchases.";
  arguments_assert(arguments, 0);
  let key = text_frozen("zone");
  let saved = storage_local_name_get(fn_name("app_receipts"), key);
  let countries = app_receipts_zone_countries();
  for (let country of countries) {
    let left = property_get(country, "zone");
    if (equal(left, saved)) {
      return country;
    }
  }
  let first = countries[0];
  return first;
}
