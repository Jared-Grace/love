import { app_shared_page_stage_prod_is } from "./app_shared_page_stage_prod_is.mjs";
import { not } from "./not.mjs";
import { browser_automated_is } from "./browser_automated_is.mjs";
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
  ("Never from a browser a test is driving: every test run opens a fresh browser, and each one would count as a new device - measured 2026-09-30, 1707 opens of replace in one day, all from tests.");
  let automated = browser_automated_is();
  if (automated) {
    return false;
  }
  ("Never from the dev or latest copy: those are opened to try a change, not to use the app - measured 2026-09-30, receipts showed opens while it had never been sent to the public site. REJECTED: recording the copy in the address, so both could be counted - it changes where every open is kept and splits every count in two, to measure the one person who tries changes.");
  let prod = app_shared_page_stage_prod_is();
  if (not(prod)) {
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
