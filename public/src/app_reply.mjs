import { app_main_production } from "../../../love/public/src/app_main_production.mjs";
export async function app_reply() {
  await app_main_production("app_reply_main", "jared-grace");
}
