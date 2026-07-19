import { app_shared_html_update } from "./app_shared_html_update.mjs";
import { app_shared_latest_update } from "./app_shared_latest_update.mjs";
import { app_shared_production_update } from "./app_shared_production_update.mjs";
export async function app_shared_update(name) {
  await app_shared_html_update(name);
  await app_shared_production_update(name);
  await app_shared_latest_update(name);
}
