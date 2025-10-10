import { app_new_staging } from "../../../love/public/src/app_new_staging.mjs";
import { app_new_production_update } from "../../../love/public/src/app_new_production_update.mjs";
import { html_app_update } from "../../../karate_code/public/src/html_app_update.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_new_update(name) {
  marker("1");
  await app_new_production_update(name);
  await app_new_staging(name);
  await html_app_update(name);
}
