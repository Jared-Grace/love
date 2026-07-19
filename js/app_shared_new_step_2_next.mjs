import { app_new_fn_latest } from "./app_new_fn_latest.mjs";
import { app_shared_latest_update } from "./app_shared_latest_update.mjs";
import { app_shared_new_fn_main } from "./app_shared_new_fn_main.mjs";
import { app_shared_production_update } from "./app_shared_production_update.mjs";
import { html_new } from "./html_new.mjs";
export async function app_shared_new_step_2_next(name) {
  await app_shared_new_fn_main(name);
  await app_new_fn_latest(name);
  await app_shared_production_update(name);
  await app_shared_latest_update(name);
  await html_new(name);
}
