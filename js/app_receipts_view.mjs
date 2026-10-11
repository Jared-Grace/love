import { app_shared_main_production } from "./app_shared_main_production.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_receipts_view() {
  "The read-only receipts page itself: the same Firebase project the receipts app keeps its purchases in, then the newest build of the viewing screen.";
  await app_shared_main_production(
    fn_name("app_receipts_view_main"),
    "jared-grace",
  );
}
