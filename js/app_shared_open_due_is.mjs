import { host_local_network_is } from "./host_local_network_is.mjs";
import { app_shared_open_day_key } from "./app_shared_open_day_key.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { equal } from "./equal.mjs";
export function app_shared_open_due_is(app_fn) {
  "whether this app still owes today's open from this device";
  "Never from a page served on this same network, so the machine an app is built on and the phone it is tried out on do not count as somebody using it.";
  let here = host_local_network_is();
  if (here) {
    return false;
  }
  let key = app_shared_open_day_key();
  let sent = storage_local_get(app_fn, key);
  let today = date_today_iso();
  let already = equal(sent, today);
  if (already) {
    return false;
  }
  return true;
}
