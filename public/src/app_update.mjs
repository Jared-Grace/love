import { marker } from "../../../love/public/src/marker.mjs";
import { app_new_html_update } from "../../../love/public/src/app_new_html_update.mjs";
import { app_new_latest_update } from "../../../love/public/src/app_new_latest_update.mjs";
import { app_new_production_update } from "../../../love/public/src/app_new_production_update.mjs";
export async function app_update(name) {
  marker("1");
  await app_new_production_update(name);
  await app_new_latest_update(name);
  await app_new_html_update(name);
}
