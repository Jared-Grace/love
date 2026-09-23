import { fn_name } from "./fn_name.mjs";
import { app_shared_main_production } from "./app_shared_main_production.mjs";
export async function app_receipts(context) {
  await app_shared_main_production("app_receipts_main", "jared-grace");
}
