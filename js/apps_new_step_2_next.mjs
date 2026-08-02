import { apps_new_fn_latest } from "./apps_new_fn_latest.mjs";
import { app_shared_latest_update } from "./app_shared_latest_update.mjs";
import { apps_new_fn_main } from "./apps_new_fn_main.mjs";
import { app_shared_production_update } from "./app_shared_production_update.mjs";
import { html_new } from "./html_new.mjs";
export async function apps_new_step_2_next(name) {
  await apps_new_fn_main(name);
  await apps_new_fn_latest(name);
  await app_shared_production_update(name);
  await app_shared_latest_update(name);
  await html_new(name);
}
