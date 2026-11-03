import { fn_name } from "./fn_name.mjs";
import { app_receipts_php_per_usd_month_key } from "./app_receipts_php_per_usd_month_key.mjs";
import { storage_local_name_get } from "./storage_local_name_get.mjs";
export function app_receipts_php_per_usd_month_kept(month) {
  "$plain month";
  "What this phone holds for one month, written YYYY-MM: asked, the day it last asked, and rates, from each day to its rate. Null when it has never asked.";
  let key = app_receipts_php_per_usd_month_key(month);
  let kept = storage_local_name_get(fn_name("app_receipts"), key);
  return kept;
}
