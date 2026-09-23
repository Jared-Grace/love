import { fn_name } from "./fn_name.mjs";
import { app_shared_main_production } from "./app_shared_main_production.mjs";
export async function app_receipts(context) {
  let f_name = fn_name("app_receipts");
  await app_shared_main_production(f_name, "jared-grace");
}
