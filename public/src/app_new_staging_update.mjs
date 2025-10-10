import { app_main_latest } from "../../../love/public/src/app_main_latest.mjs";
import { app_name_staging } from "../../../love/public/src/app_name_staging.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_new_step_3_generic } from "../../../love/public/src/app_new_step_3_generic.mjs";
export async function app_new_staging_update(name) {
  marker("1");
  let combined = app_name_staging(name);
  await app_new_step_3_generic(name, app_main_latest, combined);
}
