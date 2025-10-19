import { app_main_production } from "../../../love/public/src/app_main_production.mjs";
export async function app_sandbox() {
  await app_main_production("app_sandbox_main", "jared-grace");
}
