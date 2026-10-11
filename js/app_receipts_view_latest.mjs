import { fn_name } from "./fn_name.mjs";
import { app_shared_main_latest } from "./app_shared_main_latest.mjs";
export async function app_receipts_view_latest() {
  await app_shared_main_latest(
    fn_name("app_receipts_view_main"),
    "jared-grace",
  );
}
