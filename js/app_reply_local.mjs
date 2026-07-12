import { app_main_production } from "./app_main_production.mjs";
export async function app_reply_local() {
  await app_main_production("app_reply_local_main", "jared-grace");
}
