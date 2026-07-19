import { app_shared_update_generic } from "./app_shared_update_generic.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { app_shared_main_production } from "./app_shared_main_production.mjs";
export async function app_shared_production_update(name) {
  let a_name = app_shared_name_prefixed(name);
  await app_shared_update_generic(name, app_shared_main_production, a_name);
}
