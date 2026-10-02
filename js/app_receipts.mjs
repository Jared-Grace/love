import { app_shared_main_production } from "./app_shared_main_production.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_receipts() {
  "The receipts page itself: it sets which Firebase project this app's purchases live in, then fetches the newest build of the screen and runs it.";
  "It is the one app front door that is handed a place to draw in and wants nothing, because it draws nothing. The screen it fetches boots itself and makes its own place to draw, so asking for one here would be asking for a value to throw away - every other front door reads the one it is given, and this is the only one that does not.";
  await app_shared_main_production(fn_name("app_receipts_main"), "jared-grace");
}
