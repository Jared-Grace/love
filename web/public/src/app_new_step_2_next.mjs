import { app_new_fn_latest } from "../../../love/public/src/app_new_fn_latest.mjs";
import { app_new_latest_update } from "../../../love/public/src/app_new_latest_update.mjs";
import { app_new_fn_main } from "../../../love/public/src/app_new_fn_main.mjs";
import { app_new_production_update } from "../../../love/public/src/app_new_production_update.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_new } from "../../../love/public/src/html_new.mjs";
export async function app_new_step_2_next(name) {
  marker("1");
  await app_new_fn_main(name);
  await app_new_fn_latest(name);
  await app_new_production_update(name);
  await app_new_latest_update(name);
  await html_new(name);
}
