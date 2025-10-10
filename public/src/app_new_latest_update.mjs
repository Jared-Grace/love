import { app_main_latest } from "../../../love/public/src/app_main_latest.mjs";
import { app_name_latest } from "../../../love/public/src/app_name_latest.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_new_update_generic } from "../../../love/public/src/app_new_update_generic.mjs";
export async function app_new_latest_update(name) {
  marker("1");
  let combined = app_name_latest(name);
  await app_new_update_generic(name, app_main_latest, combined);
}
