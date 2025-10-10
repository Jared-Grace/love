import { app_new_latest_update } from "../../../love/public/src/app_new_latest_update.mjs";
import { app_new_production_update } from "../../../love/public/src/app_new_production_update.mjs";
import { app_new_html_update } from "../../../love/public/src/app_new_html_update.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_new_update(name) {
  marker("1");
  await app_new_production_update(name);
  await app_new_latest_update(name);
  await app_new_html_update(name);
}
