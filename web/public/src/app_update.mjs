import { app_new_html_update } from "../../../love/public/src/app_new_html_update.mjs";
import { app_new_staging_update } from "../../../love/public/src/app_new_staging_update.mjs";
import { app_new_production_update } from "../../../love/public/src/app_new_production_update.mjs";
export async function app_update(name) {
  await app_new_production_update(name);
  await app_new_staging_update(name);
  await app_new_html_update(name);
}
