import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { storage_local_name_set } from "./storage_local_name_set.mjs";
export function app_receipts_zone_set(zone) {
  "$plain zone";
  "Keep on this phone the time zone the list of purchases is to be read in, such as 'America/New_York', so the list opens in it next time.";
  arguments_assert(arguments, 1);
  let key = text_frozen("zone");
  storage_local_name_set(fn_name("app_receipts"), key, zone);
}
